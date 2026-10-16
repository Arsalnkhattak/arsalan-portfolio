# 🚀 Portfolio Deployment Guide

Complete, production-ready **Full-Stack MERN Developer Portfolio** built with React 19, Vite 8, and Tailwind CSS.

---

## 📦 What's Included

- ✅ **Hero** with typewriter animation, CTA buttons, and social links
- ✅ **About Me** with bio, core values, tech highlights, and availability status
- ✅ **Skills** section with 12 categorized technical competencies and animated proficiency bars
- ✅ **Projects** showcase with 4 featured full-stack architectures, metrics, and live demo links
- ✅ **Experience** timeline with 3 professional roles and detailed achievements
- ✅ **Education** section with degree and 4 professional certifications
- ✅ **Contact** form with graceful backend fallback for static hosting
- ✅ **Responsive navbar** with smooth scroll, active section highlighting, and mobile drawer
- ✅ **SEO-optimised** with meta tags, Open Graph, Twitter cards, and structured data
- ✅ **Accessible** with ARIA labels, semantic HTML, and keyboard navigation
- ✅ **Performance-optimised** — 301KB JS (90KB gzipped), 67KB CSS (10.8KB gzipped)

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 19.2.8                        |
| Build Tool  | Vite 8.3.0                          |
| Styling     | Tailwind CSS 4.3.3                  |
| Icons       | Lucide React 1.56.0                 |
| Fonts       | Inter + JetBrains Mono (Google)     |
| Animations  | CSS transitions + IntersectionObserver |

---

## 📁 Project Structure

```
portfolio/
├── client/                      # React frontend (standalone)
│   ├── dist/                    # Production build output
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # Reusable UI primitives
│   │   │   │   ├── Badge.jsx
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── SectionHeader.jsx
│   │   │   │   ├── SectionWrapper.jsx
│   │   │   │   └── TypewriterText.jsx
│   │   │   ├── About.jsx
│   │   │   ├── BrandIcons.jsx   # GitHub + LinkedIn SVG icons
│   │   │   ├── Contact.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ParticleBackground.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── TechStack.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css            # Global styles + Tailwind
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── server/                      # Optional Node.js backend (not required)
```

---

## 🚦 Quick Start (Local Development)

### Prerequisites
- **Node.js** v18+ ([download](https://nodejs.org/))
- **npm** v9+ (comes with Node.js)

### Steps

```bash
# 1. Navigate to the client directory
cd portfolio/client

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

The dev server supports:
- ⚡ Hot Module Replacement (HMR)
- 🔄 Automatic browser refresh on file save
- 🎨 Tailwind CSS JIT compilation

---

## 🏗️ Production Build

```bash
cd portfolio/client
npm run build
```

**Output:**
- `dist/` folder contains optimised production files
- **301KB** JavaScript (90.5KB gzipped)
- **67KB** CSS (10.9KB gzipped)
- Ready for static hosting (Vercel, Netlify, GitHub Pages, etc.)

**Preview production build locally:**
```bash
npm run preview
# → http://localhost:4173
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended — Zero Config)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**Steps:**
1. Push your code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Set **Root Directory** to `client`
4. Vercel auto-detects Vite — deploy!

**Custom domain:** Add in Vercel dashboard → Settings → Domains

---

### Option 2: Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

**Steps:**
1. Push code to GitHub
2. Click "New site from Git" on [netlify.com](https://netlify.com)
3. Connect your repo
4. **Build settings:**
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `client/dist`
5. Deploy

**Custom domain:** Add in Netlify dashboard → Domain settings

---

### Option 3: GitHub Pages (Free Static Hosting)

**Add to `package.json` (inside `client/`):**
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**Install `gh-pages`:**
```bash
npm install --save-dev gh-pages
```

**Deploy:**
```bash
npm run deploy
```

**Enable GitHub Pages:**
1. Go to repo → Settings → Pages
2. Source: `gh-pages` branch
3. Your site will be live at `https://yourusername.github.io/portfolio`

---

### Option 4: AWS S3 + CloudFront

**1. Build:**
```bash
npm run build
```

**2. Upload to S3:**
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

**3. Configure CloudFront:**
- Origin: Your S3 bucket
- Default root object: `index.html`
- Error pages: Redirect 404 → `/index.html` (for SPA routing)

**4. Invalidate cache after updates:**
```bash
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

---

### Option 5: Traditional Shared Hosting (cPanel, etc.)

**Steps:**
1. Run `npm run build` locally
2. Upload the entire `dist/` folder contents via FTP/SFTP to your `public_html/` directory
3. Done! Your site is live at `https://yourdomain.com`

**Note:** No server-side rendering — pure static files.

---

## 🎨 Customisation Guide

### 1. Personal Information

**File:** `client/src/components/Hero.jsx`
```jsx
// Line 10-14: Change your name and roles
const TYPEWRITER_STRINGS = [
  'Full-Stack MERN Developer',    // ← Edit these
  'React & Node.js Engineer',
  // ...
];
```

**File:** `client/src/components/About.jsx`
```jsx
// Line 15-18: Update contact info
const INFO_ITEMS = [
  { icon: MapPin, label: 'Location', value: 'Your City, Country' },
  { icon: Mail,   label: 'Email',    value: 'your@email.com' },
  // ...
];
```

---

### 2. Projects

**File:** `client/src/components/Projects.jsx`

Replace the `PROJECTS` array (line 10) with your own projects:

```jsx
const PROJECTS = [
  {
    id: 1,
    title: 'Your Project Name',
    tagline: 'Brief one-liner description',
    category: 'Full-Stack Architecture',  // or other category
    description: 'Detailed paragraph about the project...',
    highlights: [
      'Achievement 1 with metrics',
      'Achievement 2 with impact',
    ],
    metrics: { Users: '10k+', Latency: '< 50ms', Uptime: '99.9%' },
    tags: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/you/repo',
    liveUrl: 'https://demo.example.com',
    featured: true,
  },
  // Add more projects...
];
```

---

### 3. Skills

**File:** `client/src/components/TechStack.jsx`

Edit the `SKILLS` array (line 13) to add/remove/modify skills:

```jsx
const SKILLS = [
  {
    id: 1,
    category: 'Frontend',
    name: 'React & Next.js',
    icon: Code2,
    iconColor: 'text-cyan-400',
    barColor: 'from-cyan-500 to-blue-500',
    proficiency: 96,  // 0-100
    description: 'Your description...',
    tags: ['React 19', 'Next.js', 'TypeScript'],
  },
  // ...
];
```

---

### 4. Experience

**File:** `client/src/components/Experience.jsx`

Update `EXPERIENCES` array (line 7):

```jsx
const EXPERIENCES = [
  {
    id: 1,
    role: 'Your Job Title',
    company: 'Company Name',
    companyUrl: 'https://company.com',
    period: 'Jan 2023 – Present',
    duration: '1 yr 9 mo',
    location: 'City, Country (Remote)',
    type: 'Full-time',
    description: 'What you did in this role...',
    achievements: [
      'Reduced latency by 90% using Redis',
      'Led a team of 5 engineers',
    ],
    tags: ['React', 'Node.js', 'AWS'],
    current: true,  // shows pulsing dot
  },
  // ...
];
```

---

### 5. Education & Certifications

**File:** `client/src/components/Education.jsx`

- **Degree:** Update `EDUCATION` array (line 7)
- **Certifications:** Update `CERTIFICATIONS` array (line 30)

---

### 6. SEO & Meta Tags

**File:** `client/index.html`

```html
<!-- Line 7-10: Update title and description -->
<title>Your Name — Full-Stack Developer | React · Node · MongoDB</title>
<meta name="description" content="Your custom description here..." />

<!-- Line 18-20: Open Graph (for social shares) -->
<meta property="og:title" content="Your Name — Full-Stack Developer" />
<meta property="og:url" content="https://yourdomain.com" />
<meta property="og:image" content="https://yourdomain.com/og-image.png" />
```

**Add your own OG image:**
1. Create a 1200×630px image
2. Save as `client/public/og-image.png`
3. Update the `og:image` meta tag

---

### 7. Colours & Branding

**File:** `client/tailwind.config.js`

```js
// Line 12-18: Customise brand colours
colors: {
  brand: {
    DEFAULT: '#10b981',  // emerald-500 → change to your brand colour
    light:   '#6ee7b7',
    dark:    '#064e3b',
  },
  // ...
}
```

**File:** `client/src/index.css`

```css
/* Line 4-12: CSS variables */
:root {
  --color-emerald: #10b981;  /* ← Change primary accent colour */
  /* ... */
}
```

---

### 8. Résumé Download

Place your PDF résumé at:
```
client/public/resume-alex-vance.pdf
```

Or update all occurrences of `/resume-alex-vance.pdf` to your filename:
- `Navbar.jsx`
- `Hero.jsx`
- `About.jsx`
- `Footer.jsx`

---

### 9. Social Links

Update GitHub/LinkedIn/Email URLs in:
- `client/src/components/Navbar.jsx` (line 74-84)
- `client/src/components/Hero.jsx` (line 161-178)
- `client/src/components/About.jsx` (line 105-117)
- `client/src/components/Contact.jsx` (line 15-19)
- `client/src/components/Footer.jsx` (line 17-21)

**Find & replace:**
- `https://github.com/alexvance-dev` → your GitHub
- `https://linkedin.com/in/alexvance-dev` → your LinkedIn
- `alex@alexvance.dev` → your email

---

## 📧 Contact Form Backend (Optional)

The contact form **works standalone** — it gracefully falls back to showing success even without a backend.

**To add a real backend:**

1. Create an API endpoint at `/api/contact` (POST)
2. Accept JSON: `{ name, email, subject, message }`
3. Return: `{ success: true }` on success

**Example with Node.js + Express + Nodemailer:**

```js
// server/routes/contact.js
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Send email via Nodemailer or save to DB
  await transporter.sendMail({
    from: email,
    to: 'your@email.com',
    subject: `Portfolio Contact: ${name}`,
    text: message,
  });
  
  res.json({ success: true });
});
```

**Deploy backend to:**
- Heroku
- Railway
- Render
- AWS Lambda

Update Vite proxy if needed (`vite.config.js`).

---

## 🔧 Environment Variables (Optional)

If you need API keys (e.g., for analytics):

**Create:** `client/.env`
```bash
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_API_URL=https://your-api.com
```

**Access in code:**
```js
const gaId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
```

**Note:** Vite requires `VITE_` prefix for client-side env vars.

---

## 📊 Analytics Integration

### Google Analytics 4

**1. Add to `client/index.html` before `</head>`:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

**In `client/src/main.jsx`:**
```js
import { inject } from '@vercel/analytics';
inject();
```

---

## ⚡ Performance Tips

### 1. Image Optimisation

**Before adding images:**
- Use WebP format for photos
- Compress with [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
- Use SVG for logos/icons
- Max 1920px width for hero images

**Lazy load images:**
```jsx
<img src="..." alt="..." loading="lazy" />
```

### 2. Code Splitting (already done)

Vite automatically code-splits by route. No action needed.

### 3. Font Loading

Fonts are already optimised with `preconnect` and `display=swap` in `index.html`.

### 4. Lighthouse Score Targets

- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

Run audit:
```bash
npx lighthouse http://localhost:4173 --view
```

---

## 🐛 Troubleshooting

### Build fails with "Module not found"

**Solution:**
```bash
cd client
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styles not applying

**Solution:**
- Ensure Tailwind classes are in `content` paths (`tailwind.config.js`)
- Check browser cache (hard refresh: Ctrl+Shift+R / Cmd+Shift+R)

### Smooth scroll not working

**Solution:**
- Check `scroll-behavior: smooth` in `index.html` (`<html>` tag)
- Ensure section IDs match navbar hrefs

### Contact form not submitting

**Solution:**
- The form gracefully handles missing backends
- Check browser console for actual errors
- Verify `/api/contact` endpoint if using backend

---

## 📝 Checklist Before Deploy

- [ ] Update all personal info (name, email, location, bio)
- [ ] Replace placeholder projects with your real projects
- [ ] Add your GitHub/LinkedIn/email URLs
- [ ] Upload your résumé PDF to `client/public/`
- [ ] Update meta tags & OG image in `index.html`
- [ ] Test contact form submission
- [ ] Test on mobile (Chrome DevTools → Device Toolbar)
- [ ] Run `npm run build` — verify no errors
- [ ] Run Lighthouse audit (score 90+)
- [ ] Test all navigation links
- [ ] Verify all external links open in new tab
- [ ] Check accessibility (keyboard navigation, screen reader)

---

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Android 90+)

**IE11:** Not supported (uses modern ES6+ features)

---

## 📄 License

This portfolio template is **free to use** for personal and commercial projects.

**Attribution appreciated but not required:**
- Built with React, Vite, and Tailwind CSS
- Crafted with ❤️ by [Your Name]

---

## 🆘 Support & Questions

**Issues?** Open a GitHub issue or reach out via:
- 📧 Email: alex@alexvance.dev
- 💼 LinkedIn: [linkedin.com/in/alexvance-dev](https://linkedin.com/in/alexvance-dev)
- 🐙 GitHub: [github.com/alexvance-dev](https://github.com/alexvance-dev)

---

## 🎉 You're All Set!

Your portfolio is ready to impress recruiters and clients. Good luck! 🚀
