# # 🚀 Ronak Tailor — Full Stack Portfolio

A modern, responsive **Full Stack Developer Portfolio** built for seamless deployment on **Vercel**. This project showcases my profile, technical skills, featured projects, and provides a working contact form powered by **Vercel Serverless Functions**.

> ⚡ Lightweight • Fast • Mobile Responsive • Vercel Ready

---

## 🌐 Live Demo

🔗 **Portfolio:** https://ronak-portfolio-omega.vercel.app/

> Replace the above link with your deployed Vercel URL.

---

# ✨ Features

* 🎨 Clean and modern UI
* 📱 Fully responsive design
* ⚡ Lightning-fast performance
* 👤 Dynamic profile information
* 💼 Dynamic project showcase
* 📧 Contact form using Vercel Serverless Functions
* ☁️ One-click deployment on Vercel
* 🛠 Easy content updates through JSON files

---

# 🛠 Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Vercel Serverless Functions
* Node.js

### Deployment

* Vercel

---

# 📂 Project Structure

```text
portfolio/
│
├── index.html
│
├── api/
│   ├── profile.js
│   ├── projects.js
│   ├── contact.js
│   │
│   └── data/
│       ├── profile.json
│       └── projects.json
│
├── assets/
│
└── README.md
```

---

# 🚀 Deploy on Vercel

## Option 1 — Using Vercel Website

1. Push this project to GitHub.
2. Visit https://vercel.com
3. Click **Add New → Project**
4. Import your GitHub repository.
5. Select **Other** as the framework.
6. Click **Deploy**.

That's it! 🎉

---

## Option 2 — Using Vercel CLI

Install Vercel CLI

```bash
npm install -g vercel
```

Deploy

```bash
vercel
```

Deploy to Production

```bash
vercel --prod
```

---

# 💻 Run Locally

Install Vercel CLI

```bash
npm install -g vercel
```

Start Development Server

```bash
vercel dev
```

Open

```
http://localhost:3000
```

---

# 📧 Contact Form Setup (SMTP)

To receive contact form submissions directly via email, add the following Environment Variables in your Vercel Project.

| Variable   | Description                                             |
| ---------- | ------------------------------------------------------- |
| SMTP_HOST  | smtp.gmail.com                                          |
| SMTP_PORT  | 465                                                     |
| SMTP_USER  | Your Gmail Address                                      |
| SMTP_PASS  | Gmail App Password                                      |
| CONTACT_TO | [tailorronak6@gmail.com](mailto:tailorronak6@gmail.com) |

After adding these variables, simply redeploy the project.

---

# 🔐 Gmail App Password

Google no longer allows normal Gmail passwords for SMTP.

Steps:

1. Enable **2-Step Verification**
2. Generate an **App Password**
3. Use that password as `SMTP_PASS`

---

# ✏️ Updating Portfolio Content

No need to edit HTML.

Simply update:

```text
api/data/profile.json
```

or

```text
api/data/projects.json
```

Push the changes to GitHub and redeploy.

---

# 📸 Screenshots

> Add screenshots of your portfolio here.

Example:

```text
screenshots/
    home.png
    projects.png
    contact.png
```

---

# 👨‍💻 About Me

**Ronak Tailor**

Full Stack Developer from Rajasthan, India.

I enjoy building modern web applications, solving Data Structures & Algorithms problems, and continuously learning new technologies.

---

# 📫 Connect With Me

* GitHub: https://github.com/Ronak-star
* LinkedIn: https://www.linkedin.com/in/ronak-tailor-10037235a/
* Email: [tailorronak6@gmail.com](mailto:tailorronak6@gmail.com)
* Portfolio: https://ronak-portfolio-omega.vercel.app/

---

# ⭐ Support

If you like this project, please consider giving it a **⭐ Star** on GitHub.

It helps support my work and motivates me to build more open-source projects.

---

# 📄 License

This project is open source and available under the **MIT License**.

---

<div align="center">

### ⭐ Thanks for visiting my portfolio repository! ⭐

Made with ❤️ by **Ronak Tailor**

</div>
