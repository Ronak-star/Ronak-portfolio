# Ronak Tailor — Portfolio (Vercel-ready)

This is the same full-stack portfolio, restructured for Vercel:
- `index.html` — the site (static, deployed as-is)
- `api/profile.js`, `api/projects.js`, `api/contact.js` — serverless functions
  (Vercel auto-detects anything inside `/api` and turns each file into an
  endpoint — no Express server needed)
- `api/data/*.json` — your profile & project data

## Deploy — Option A: Vercel website (easiest, no terminal)
1. Put this folder in a GitHub repo (create a new repo, upload these files).
2. Go to https://vercel.com → **Add New → Project**.
3. Import that GitHub repo.
4. Framework preset: choose **Other** (Vercel will auto-detect the `/api`
   folder as functions and `index.html` as static — no build command needed).
5. Click **Deploy**. You'll get a live URL like `https://your-project.vercel.app`.

## Deploy — Option B: Vercel CLI (from your computer)
```bash
npm i -g vercel        # one-time install
cd path/to/this/folder
vercel                 # first deploy — follow the prompts
vercel --prod          # promote to your production URL
```

## Making the contact form actually email you
The form posts to `/api/contact`. Since serverless functions don't keep a
persistent file to write to, this version sends an email via SMTP instead
of saving to a JSON file. To enable it:

1. In your Vercel project → **Settings → Environment Variables**, add:
   | Key | Example |
   |---|---|
   | `SMTP_HOST` | `smtp.gmail.com` |
   | `SMTP_PORT` | `465` |
   | `SMTP_USER` | `youraddress@gmail.com` |
   | `SMTP_PASS` | an **app password** (not your normal password) |
   | `CONTACT_TO` | `tailorronak6@gmail.com` |
2. Redeploy (Vercel → Deployments → ⋯ → Redeploy).

If you skip this step, the form still works and returns a success message —
submissions just get logged to **Vercel → your project → Logs** instead of
emailed to you.

> Gmail note: you can't use your normal Gmail password for SMTP_PASS anymore.
> Turn on 2-Step Verification on your Google account, then generate an
> **App Password** at https://myaccount.google.com/apppasswords and use that.

## Editing your content after deploying
Edit `api/data/profile.json` or `api/data/projects.json` and push/redeploy —
no HTML/CSS changes needed to add a project, update skills, etc.

## Local testing before deploying
```bash
npm i -g vercel
vercel dev
```
This runs the same setup locally (usually at `http://localhost:3000`),
so you can test the API routes and the contact form before pushing live.
