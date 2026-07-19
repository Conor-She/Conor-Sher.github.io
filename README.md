# Portfolio Site — Starter Template

A 4-page dark-mode portfolio (Home / About / Projects / Contact) styled like a
code editor — tabs for nav, a terminal-style hero. Plain HTML/CSS/JS, no build
step, deploys straight to GitHub Pages.

## Files

```
portfolio/
├── index.html      ← home page (hero + featured projects)
├── about.html       ← bio, skills, experience timeline
├── projects.html    ← full project grid
├── contact.html     ← email / GitHub / LinkedIn / resume links
├── css/style.css    ← all styling, edit variables at the top to retheme
├── js/script.js     ← small typewriter effect for the hero
└── assets/          ← put resume.pdf, images, etc. here
```

## Edit checklist

Search each HTML file for these and replace with your real info:

- [ ] `Your Name` — appears in `<title>` tags, hero, footer
- [ ] `yourusername` — GitHub links
- [ ] `yourprofile` — LinkedIn link
- [ ] `you@example.com` — email
- [ ] Hero tagline and role text (`index.html`)
- [ ] About page bio paragraphs and timeline (`about.html`)
- [ ] Skill tags — languages / frameworks (`about.html`)
- [ ] Project cards — title, description, tags, links (`index.html` featured
      section + `projects.html` full grid). Duplicate a `.card` block to add
      more projects, delete ones you don't need.
- [ ] Add your resume PDF to `assets/resume.pdf` (or update the links to
      point elsewhere)

## Retheming

All colors, fonts, and spacing are CSS variables at the top of
`css/style.css` under `:root`. Change `--accent` for a different accent
color, or swap `--font-display` for a different heading font (update the
Google Fonts link in each HTML `<head>` if you do — this template assumes
system-installed JetBrains Mono / falls back to a generic monospace, so for
guaranteed rendering add:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

to the `<head>` of each page, right above the `style.css` link.

## Deploying to GitHub Pages

1. Create a new GitHub repo. If you want it at `https://yourusername.github.io`
   directly, name the repo exactly `yourusername.github.io`. Otherwise any
   repo name works and it'll deploy to `https://yourusername.github.io/repo-name`.
2. Push these files to the repo root (not inside a subfolder):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Under **Branch**, select `main` and `/ (root)`, then **Save**.
6. Wait ~1 minute, then your site is live at the URL GitHub shows on that
   same Pages settings screen.
7. Any time you push new commits to `main`, the site redeploys automatically.

## Optional next steps

- Add a `CNAME` file if you want a custom domain.
- Add real screenshots/GIFs of your projects to `assets/` and reference them
  in the project cards for more visual proof of work.
- Run your pages through Lighthouse (Chrome DevTools) to check accessibility
  and performance before sharing the link on your resume.
