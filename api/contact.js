// POST /api/contact
// Serverless functions don't have a persistent filesystem, so instead of
// writing to a JSON file (like the local Express version does), this sends
// you an email via SMTP using nodemailer. Set these in your Vercel Project
// → Settings → Environment Variables:
//
//   SMTP_HOST     e.g. smtp.gmail.com
//   SMTP_PORT     e.g. 465
//   SMTP_USER     your SMTP username / email
//   SMTP_PASS     your SMTP password or app password
//   CONTACT_TO    the email address you want messages sent to
//
// If those aren't set yet, the function still accepts the message and logs
// it to the Vercel function logs (Dashboard → your project → Logs) so
// nothing is lost — you just won't get an email until SMTP is configured.

let nodemailer;
try { nodemailer = require('nodemailer'); } catch (e) { nodemailer = null; }

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are all required.' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  const smtpConfigured = nodemailer && SMTP_HOST && SMTP_USER && SMTP_PASS && CONTACT_TO;

  if (smtpConfigured) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS }
      });

      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${SMTP_USER}>`,
        to: CONTACT_TO,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: `From: ${name} (${email})\n\n${message}`
      });

      return res.status(201).json({ ok: true, message: 'Message sent — thanks for reaching out!' });
    } catch (err) {
      console.error('Email send failed:', err.message);
      // Fall through to logging so the message isn't silently lost.
    }
  }

  // Fallback: no SMTP configured (or send failed) — log so it's visible in Vercel's logs.
  console.log('[contact form submission]', { name, email, message, receivedAt: new Date().toISOString() });
  return res.status(201).json({
    ok: true,
    message: smtpConfigured
      ? 'Message received (email delivery failed, but it was logged).'
      : 'Message received — logged on the server. Add SMTP env vars to get it emailed to you.'
  });
};
