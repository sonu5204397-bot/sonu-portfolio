# Sonu Yadav — Cybersecurity Portfolio

Professional cybersecurity portfolio website for Sonu Yadav.

**Live at:** Open `index.html` in a browser

---

## Folder Structure

```
/
├── index.html                     ← Main HTML file
├── css/
│   └── style.css                  ← All styles
├── js/
│   └── script.js                  ← All JavaScript
├── assets/
│   ├── images/
│   │   ├── profile.jpg            ← ADD YOUR PROFILE PHOTO HERE
│   │   └── certificates/
│   │       ├── tutedude-cyber-security.png
│   │       ├── tutedude-linux.png
│   │       ├── simplilearn-cyber-security.png
│   │       ├── unified-mentor-cyber-security.png
│   │       ├── tdo-cyber-webinar.png
│   │       └── vbyld-2027.png
│   └── icons/
└── README.md
```

---

## Setup Instructions

### Step 1 — Add Profile Photo
Place your professional portrait at:
```
assets/images/profile.jpg
```

### Step 2 — Add Certificate Images
Place your certificate images in:
```
assets/images/certificates/
```
Use these exact filenames:
- `tutedude-cyber-security.png`
- `tutedude-linux.png`
- `simplilearn-cyber-security.png`
- `unified-mentor-cyber-security.png`
- `tdo-cyber-webinar.png`
- `vbyld-2027.png`

### Step 3 — Add Resume
Place your resume PDF at:
```
assets/resume/resume.pdf
```
Create the `assets/resume/` folder first.

### Step 4 — Add GitHub Link
When you have your GitHub URL, search for `placeholder-btn` and `Coming Soon` in the HTML and replace with your actual GitHub URL.

### Step 5 — Add Email Address
In `index.html`, search for `Add your email address` and replace with your actual email. Also update the contact link icon section.

### Step 6 — Enable Contact Form (Optional)
The contact form is frontend-only. To receive emails:
1. Sign up at [Formspree.io](https://formspree.io) (free tier available)
2. Replace the form action or add Formspree endpoint in `js/script.js`
3. Alternatively, use [EmailJS](https://emailjs.com)

---

## Sections Included

1. **Hero** — Full-screen intro with profile photo, typed animation, and social links
2. **About** — Background, education, and focus area cards
3. **Skills** — Categorised skill tags across 6 domains
4. **Tools** — 12 cybersecurity tool cards
5. **Projects** — Filterable project cards with tech tags
6. **Hands-on Practice** — 10 lab practice cards
7. **Certifications** — 6 certificate cards with fullscreen lightbox viewer
8. **Learning Journey** — 8-step vertical timeline
9. **Resume** — Download section (PDF placeholder)
10. **Contact** — Contact form + social links
11. **Footer** — Brand, links, socials

---

## Customisation Notes

- **Colors:** Edit CSS variables at the top of `css/style.css`
- **Fonts:** Uses Inter + JetBrains Mono from Google Fonts
- **Animations:** Adjust transition speeds in CSS `:root` variables
- **Adding Projects:** Copy a `<article class="project-card">` block in the HTML

---

## Technical Stack

- Pure HTML5 / CSS3 / Vanilla JavaScript
- No frameworks, no build tools
- No external scripts beyond Google Fonts
- Mobile-responsive (works on all screen sizes)

---

## Deploy

Works on any static hosting:
- **GitHub Pages** — Push to a repo and enable Pages
- **Netlify** — Drag and drop the folder
- **Vercel** — Import from GitHub

---

© 2026 Sonu Yadav. All rights reserved.
