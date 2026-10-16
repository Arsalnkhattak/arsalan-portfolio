# 🎨 Muhammad Arsalan - MERN Stack Developer Portfolio

A modern, professional, and production-ready portfolio website showcasing my skills and projects as a Computer Science student and MERN stack developer.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![React](https://img.shields.io/badge/React-19.2.8-blue)
![Vite](https://img.shields.io/badge/Vite-8.3.0-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-4.3.3-cyan)

---

## 🚀 Live Demo

**Portfolio URL:** Coming soon!

---

## ✨ Features

### Sections
- 🏠 **Hero** — Animated typewriter intro with my name and roles
- 👤 **About Me** — Bio highlighting my education at KUST and KP-ITPB internship
- 💻 **Skills** — 10 categorized technical competencies (React, Node, MongoDB, etc.)
- 🚀 **Projects** — 4 featured projects (Portfolio, School Monitoring, E-Commerce, Blog)
- 💼 **Experience** — KP Information Technology Board internship details
- 🎓 **Education** — KUST degree + 4 professional certifications
- 📧 **Contact** — Working form with my actual contact details

### Design & Tech
- 🎨 Dark theme with glassmorphism UI effects
- ✨ Smooth scroll animations and entrance effects
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible with ARIA labels and semantic HTML
- ⚡ Fast: 298KB JS (88KB gzipped), 66KB CSS (10.8KB gzipped)
- 🔍 SEO-optimised with proper meta tags

---

## 📦 Tech Stack

| Layer       | Technology                     |
|-------------|--------------------------------|
| Framework   | React 19.2.8                   |
| Build Tool  | Vite 8.3.0                     |
| Styling     | Tailwind CSS 4.3.3             |
| Icons       | Lucide React 1.56.0            |
| Fonts       | Inter + JetBrains Mono (Google)|

---

## 🛠️ Local Development

### Prerequisites
- Node.js v18+ ([download](https://nodejs.org))
- npm v9+

### Quick Start

```bash
# Navigate to project
cd portfolio/client

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
client/
├── public/
│   ├── favicon.svg
│   ├── profile.jpeg                   # ← Your photo is here!
│   └── resume-muhammad-arsalan.pdf    # ← Add your résumé here
├── src/
│   ├── components/
│   │   ├── ui/                        # Reusable components
│   │   ├── About.jsx
│   │   ├── BrandIcons.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── Projects.jsx
│   │   └── TechStack.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── vite.config.js
```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended — Easiest)

```bash
npm i -g vercel
vercel
```

Or use the [Vercel Dashboard](https://vercel.com):
1. Import your GitHub repo
2. Root directory: `client`
3. Deploy!

### Option 2: Netlify

1. Push code to GitHub
2. Connect repo on [Netlify](https://netlify.com)
3. Build settings:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `client/dist`

### Option 3: GitHub Pages

```bash
npm install --save-dev gh-pages
```

**Add to `package.json`:**
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**Deploy:**
```bash
npm run deploy
```

---

## 🎨 Customisation

All personal info is already updated with my real data:

- ✅ Name: Muhammad Arsalan
- ✅ Education: Kohat University of Science & Technology
- ✅ Experience: KP-ITPB Internship (2 months)
- ✅ Projects: Portfolio, School Monitoring, E-Commerce, Blog
- ✅ Skills: React, Node.js, MongoDB, Mongoose, JavaScript, HTML, CSS, Tailwind
- ✅ Certifications: Johns Hopkins (Web Dev), Coursera (WordPress), Cisco (Cybersecurity), DigiSkills (Affiliate Marketing)
- ✅ Contact: arsalantec149@gmail.com
- ✅ Social Links: 
  - GitHub: https://github.com/Arsalnkhattak
  - LinkedIn: https://www.linkedin.com/in/arsalankhattak1

**To update projects or add more:**
- Edit `src/components/Projects.jsx` → `PROJECTS` array
- Edit `src/components/TechStack.jsx` → `SKILLS` array
- Edit `src/components/Experience.jsx` → `EXPERIENCES` array

---

## 📊 Performance

**Build output:**
- JavaScript: 298.75KB (88.78KB gzipped)
- CSS: 66.71KB (10.83KB gzipped)
- Total: ~365KB (99.6KB gzipped)

**Lighthouse targets:**
- Performance: 90+
- Accessibility: 95+
- SEO: 100

---

## 🐛 Troubleshooting

**Build fails?**
```bash
cd client
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Port 3000 already in use?**
- Edit `vite.config.js` and change the port number

---

## 📄 License

Free to use for personal projects.

---

## 📞 Contact

- 📧 Email: arsalantec149@gmail.com
- 💼 LinkedIn: [linkedin.com/in/arsalankhattak1](https://www.linkedin.com/in/arsalankhattak1)
- 🐙 GitHub: [github.com/Arsalnkhattak](https://github.com/Arsalnkhattak)

---

**Built with ❤️ using React 19, Vite 8, and Tailwind CSS**

*Portfolio showcasing 1+ year of MERN stack development experience*
