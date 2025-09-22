# Deployment Guide

This guide covers different ways to deploy your React portfolio to various hosting platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite React app
5. Deploy with default settings

**Build Command:** `npm run build`  
**Output Directory:** `dist`

### 2. Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Deploy

### 3. GitHub Pages
1. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Replace with your actual repo name
     plugins: [react()],
   })
   ```

2. Install GitHub Pages deploy plugin:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy script to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Initialize Firebase:
   ```bash
   firebase init hosting
   ```

3. Configure:
   - **Public directory:** `dist`
   - **Single-page app:** Yes
   - **Auto-build:** No

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## 🔧 Environment Variables

For production deployments, you may want to set environment variables:

```bash
# .env.production
VITE_SITE_URL=https://yourdomain.com
VITE_CONTACT_EMAIL=your.email@example.com
```

## 📝 Pre-Deployment Checklist

- [ ] Update content in `src/data/content.ts`
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Update meta tags in `index.html`
- [ ] Test the build locally: `npm run build && npm run preview`
- [ ] Verify all links work correctly
- [ ] Test responsive design on mobile
- [ ] Check accessibility with browser dev tools

## 🎯 Custom Domain (Optional)

### Vercel
1. Go to your project dashboard
2. Click "Domains" tab
3. Add your custom domain
4. Follow DNS configuration instructions

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS as instructed

### GitHub Pages
1. Create `CNAME` file in `public/` folder
2. Add your domain name to the file
3. Configure DNS with your domain provider

## 📊 Performance Optimization

After deployment, consider:

1. **Enable compression** on your hosting platform
2. **Set up CDN** for faster global delivery
3. **Configure caching headers** for static assets
4. **Monitor Core Web Vitals** using Google PageSpeed Insights

## 🔍 SEO Checklist

- [ ] Update `title` and `meta description` in `index.html`
- [ ] Add Open Graph tags for social sharing
- [ ] Submit sitemap to Google Search Console
- [ ] Test with Google's Rich Results Test
- [ ] Verify structured data if applicable

## 📱 PWA Features (Optional)

To make your portfolio a Progressive Web App:

1. Add a web app manifest in `public/manifest.json`
2. Add service worker for offline functionality
3. Configure icons for different device sizes
4. Enable "Add to Home Screen" functionality

---

Your portfolio is now live! 🎉
