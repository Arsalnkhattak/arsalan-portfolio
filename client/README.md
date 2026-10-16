# 🎨 Full-Stack MERN Developer Portfolio

A modern, professional, and production-ready portfolio website built with **React 19**, **Vite 8**, and **Tailwind CSS 4**.

![Portfolio Preview](https://via.placeholder.com/1200x630/050b14/10b981?text=Your+Portfolio+Screenshot)

---

## ✨ Features

### Core Sections
- 🏠 **Hero** — Animated typewriter intro, CTA buttons, social links, stats grid
- 👤 **About Me** — Bio, core values, tech highlights, availability status
- 💻 **Skills** — 12 categorized technical competencies with animated proficiency bars
- 🚀 **Projects** — 4 featured full-stack architectures with metrics and live demos
- 💼 **Experience** — Professional timeline with detailed achievements
- 🎓 **Education** — Academic background + 4 professional certifications
- 📧 **Contact** — Working form with graceful backend fallback
- 📱 **Responsive Navbar** — Smooth scroll, active section highlighting, mobile drawer

### Design & UX
- 🎨 **Dark theme** with glassmorphism UI and subtle ambient gradients
- ✨ **Smooth animations** powered by CSS transitions and IntersectionObserver
- 📱 **Fully responsive** — optimised for mobile, tablet, and desktop
- ♿ **Accessible** — ARIA labels, semantic HTML, keyboard navigation
- 🔍 **SEO-optimised** — meta tags, Open Graph, Twitter cards
- ⚡ **Fast loading** — 301KB JS (90KB gzipped), 67KB CSS (10.8KB gzipped)

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ ([download](https://nodejs.org))
- npm v9+ (included with Node.js)

### Development

```bash
# Install dependencies
npm install

# Start dev server (with HMR)
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Preview production build
npm run preview
# → http://localhost:4173
```

---

## 📦 Tech Stack

| Layer       | Technology                     |
|-------------|--------------------------------|
| Framework   | React 19.2.8                   |
| Build Tool  | Vite 8.3.0                     |
| Styling     | Tailwind CSS 4.3.3             |
| Icons       | Lucide React 1.56.0            |
| Fonts       | Inter + JetBrains Mono         |

---

## 📁 Project Structure

```
client/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── resume-alex-vance.pdf    # ← Add your résumé here
├── src/
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   ├── SectionWrapper.jsx
│   │   │   └── TypewriterText.jsx
│   │   ├── About.jsx
│   │   ├── BrandIcons.jsx       # Custom GitHub/LinkedIn SVGs
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
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🎨 Customisation

### 1. Personal Info

**Update your details in these files:**
- `src/components/Hero.jsx` — Name, roles, bio
- `src/components/About.jsx` — Location, email, experience
- `src/components/Contact.jsx` — Contact info, social links
- `index.html` — SEO meta tags, title, description

### 2. Projects

**File:** `src/components/Projects.jsx`

Edit the `PROJECTS` array with your real projects:

```jsx
{
  title: 'Your Project',
  tagline: 'One-line description',
  category: 'Full-Stack Architecture',
  description: 'Detailed paragraph...',
  highlights: ['Achievement 1', 'Achievement 2'],
  metrics: { Users: '10k+', Latency: '< 50ms' },
  tags: ['React', 'Node.js', 'MongoDB'],
  githubUrl: 'https://github.com/you/repo',
  liveUrl: 'https://demo.example.com',
  featured: true,
}
```

### 3. Skills

**File:** `src/components/TechStack.jsx`

Add/remove skills in the `SKILLS` array:

```jsx
{
  name: 'React & Next.js',
  category: 'Frontend',
  proficiency: 96,
  description: 'Component architecture...',
  tags: ['React 19', 'Next.js', 'TypeScript'],
}
```

### 4. Experience

**File:** `src/components/Experience.jsx`

Update `EXPERIENCES` with your work history.

### 5. Education

**File:** `src/components/Education.jsx`

Update `EDUCATION` (degrees) and `CERTIFICATIONS` arrays.

### 6. Social Links

**Find & replace across all files:**
- `https://github.com/alexvance-dev` → your GitHub
- `https://linkedin.com/in/alexvance-dev` → your LinkedIn
- `alex@alexvance.dev` → your email

**Files to update:**
- `Navbar.jsx`
- `Hero.jsx`
- `About.jsx`
- `Contact.jsx`
- `Footer.jsx`

### 7. Résumé

**Add your PDF résumé:**
1. Place at `public/resume-alex-vance.pdf`
2. Or update all `/resume-alex-vance.pdf` references to your filename

### 8. Colours

**File:** `tailwind.config.js`

```js
colors: {
  brand: {
    DEFAULT: '#10b981',  // ← Change to your brand colour
    light:   '#6ee7b7',
    dark:    '#064e3b',
  }
}
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the [Vercel dashboard](https://vercel.com) — auto-detects Vite.

### Netlify

```bash
npm run build
# Upload dist/ folder on netlify.com
```

Or connect your GitHub repo for auto-deploys.

### GitHub Pages

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

**See full deployment guide:** [../DEPLOYMENT.md](../DEPLOYMENT.md)

---

## 🔧 Scripts

| Command          | Description                           |
|------------------|---------------------------------------|
| `npm run dev`    | Start dev server with HMR             |
| `npm run build`  | Build for production (`dist/`)        |
| `npm run preview`| Preview production build locally      |
| `npm run lint`   | Run oxlint (code quality checks)      |

---

## 📊 Performance

**Bundle size:**
- JavaScript: 301KB (90.5KB gzipped)
- CSS: 67KB (10.9KB gzipped)
- Total: 368KB (101KB gzipped)

**Lighthouse score targets:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🐛 Troubleshooting

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Styles not applying?**
- Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
- Check `tailwind.config.js` content paths

**Smooth scroll not working?**
- Verify `scroll-behavior: smooth` in `index.html`
- Check section IDs match navbar href anchors

---

## 📄 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

---

## 🆘 Support

**Issues or questions?**
- 📧 Email: alex@alexvance.dev
- 💼 LinkedIn: [linkedin.com/in/alexvance-dev](https://linkedin.com/in/alexvance-dev)
- 🐙 GitHub: [github.com/alexvance-dev](https://github.com/alexvance-dev)

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
