# Joshua Lopez - Portfolio Site

A modern, sleek portfolio website showcasing data engineering and analysis projects. Built with HTML, CSS, and JavaScript, optimized for Cloudflare Pages.

## Features

- ✨ Modern, responsive design
- 🔗 Working social media links (LinkedIn, GitHub, Email)
- 📱 Mobile-optimized
- ⚡ Lightning-fast performance
- 🎨 Clean, professional UI
- 📊 Project showcase with tools and concepts tags

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and Grid/Flexbox
- **JavaScript** - Minimal, vanilla JS for smooth interactions and animations
- **Font Awesome** - Icon library for social media icons

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript for interactions
├── package.json        # Project metadata and scripts
└── README.md           # This file
```

## Setup & Development

### Local Development

1. **Run local development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:8080`

   If `http-server` isn't installed, you can also use Python: `python -m http.server 8000` or just open `index.html` directly in your browser

### Customization

**Update Social Links:**
Edit the social icons in `index.html`:
```html
<a href="https://linkedin.com/in/your-profile" target="_blank" ...>
<a href="https://github.com/your-username" target="_blank" ...>
<a href="mailto:your-email@example.com" ...>
```

**Update Profile Image:**
Replace the placeholder image URL in `index.html`:
```html
<img src="https://via.placeholder.com/200/200?text=Joshua+Lopez" alt="Joshua Lopez" class="profile-image">
```
Use your own image URL or place an image in the folder and reference it.

**Customize Colors:**
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2d5016;
    --primary-light: #7cb342;
    --primary-lighter: #c5d86d;
    --bg-color: #f5f1de;
    /* ... more variables ... */
}
```

## Deployment to Cloudflare Pages

### Git Integration (Recommended)

1. **Create a GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages"
   - Click "Create a project" → "Connect to Git"
   - Select your GitHub repository
   - For build settings:
     - **Build command**: (leave empty - this is a static site)
     - **Build output directory**: (leave empty or set to `.`)
   - Click "Save and Deploy"

3. **Your site will be live at**: `https://joshua-lopez-portfolio.pages.dev`

### Manual Upload

For quick deployment without Git:
1. Go to [Cloudflare Pages](https://dash.cloudflare.com)
2. Create new project → "Direct upload"
3. Drag and drop the entire project folder
4. Deploy

## Setting Up a Custom Domain

1. **In Cloudflare Dashboard**:
   - Select your Pages project
   - Go to "Custom domains"
   - Click "Set up custom domain"
   - Enter your domain (e.g., `joshualopez.dev`)

2. **Update your domain's DNS**:
   - Cloudflare will provide DNS records
   - Update your domain registrar with these records

## Performance Optimizations

- ⚡ No build step needed - pure static files
- 📦 Minimal CSS (~8KB), minimal JS (~2KB)
- 🖼️ Optimized for all screen sizes
- 🚀 Cached globally via Cloudflare's CDN
- 📊 Excellent Lighthouse scores

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Maintenance

- Update project descriptions in `index.html`
- Add new projects by duplicating the `project-card` structure
- All changes are live immediately after uploading to Cloudflare Pages

## License

MIT License - Feel free to use this as a template for your own portfolio!

## Support

For issues or customization help, refer to the inline comments in the HTML and CSS files.
