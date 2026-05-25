# ✦ Ishrak Senpai Universe

A modern, responsive portfolio website for Ishrak Senpai — where creativity meets capability.

**Live Demo:** Deploy via GitHub Pages to activate

---

## 🚀 Features

- Fully responsive: desktop, tablet, and mobile
- Dark mode / Light mode toggle (persists via localStorage)
- Smooth scroll animations and hover effects
- Embedded YouTube Shorts
- Gallery with tab navigation
- Social media links for all platforms
- SEO meta tags and accessibility (ARIA)
- Zero dependencies — pure HTML, CSS, JavaScript

---

## 📁 Project Structure

```
ishrak-senpai-universe/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # All styles (CSS variables, responsive)
├── js/
│   └── main.js             # Interactivity (tabs, scroll, theme)
├── assets/
│   └── images/             # All media assets
│       ├── pfp-main-1.jpeg
│       ├── pfp-main-2.jpeg
│       ├── banner.jpg
│       ├── profile-1.png ... profile-3.jpg
│       ├── banner-tutorials.png
│       ├── pfp-tutorials-1.jpeg ... pfp-tutorials-4.jpeg
│       └── anime-card.png
└── README.md
```

---

## 🛠️ Local Development

No build tools required. Just open `index.html` in any browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server (recommended for iframe embeds)
npx serve .
# or
python3 -m http.server 8080
# then visit http://localhost:8080
```

---

## 🌐 GitHub Pages Deployment

### Step 1: Create a GitHub repository

```bash
git init
git add .
git commit -m "Initial commit: Ishrak Senpai Universe"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ishrak-senpai-universe.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `main` branch and `/ (root)` folder
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/ishrak-senpai-universe/`

---

## ✏️ Customization

### Update content
Edit `index.html` directly — all content is in semantic HTML sections.

### Change colors/theme
Edit CSS variables at the top of `css/style.css`:
```css
:root {
  --accent:  #b482ff;   /* Main purple */
  --accent2: #ff6b9d;   /* Pink accent */
  --accent3: #00d4ff;   /* Cyan accent */
  --gold:    #ffd700;   /* Gold for quotes */
}
```

### Add new videos
Copy a `.video-card` block in `index.html` and update the YouTube embed ID in the `src` attribute.

### Add new social links
Copy a `.social-link` element and update `href`, label, and SVG icon.

---

## 📱 Browser Support

Chrome, Firefox, Safari, Edge — all modern browsers. IE not supported.

---

## 📄 License

© 2025 Ishrak Senpai Universe. All rights reserved.
