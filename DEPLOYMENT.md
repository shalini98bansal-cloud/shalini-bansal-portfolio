# GitHub Pages Deployment Guide

## Quick Setup

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `shalini-bansal-portfolio`)
5. Make it **Public** (required for free GitHub Pages)
6. Don't initialize with README (we already have files)
7. Click "Create repository"

### 2. Upload Your Files
1. In your new repository, click "uploading an existing file"
2. Drag and drop all the files from your project folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `404.html`
   - `.gitignore`
   - `CNAME` (optional)

### 3. Enable GitHub Pages
1. Go to your repository **Settings** tab
2. Scroll down to the **Pages** section (left sidebar)
3. Under "Source", select **"Deploy from a branch"**
4. Choose **"main"** branch
5. Select **"/ (root)"** folder
6. Click **"Save"**

### 4. Access Your Website
- Your site will be available at: `https://yourusername.github.io/repository-name`
- It may take a few minutes to deploy initially
- You'll see a green checkmark when deployment is complete

## Alternative: Using Git Commands

If you prefer using Git from the command line:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio website"

# Add remote repository (replace with your repository URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain from a provider (Namecheap, GoDaddy, etc.)
2. Edit the `CNAME` file in your repository
3. Add your domain name (e.g., `shalini-bansal.com`)
4. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to `yourusername.github.io`
5. In GitHub Pages settings, add your custom domain

## Updating Your Website

To update your website:

1. Make changes to your local files
2. Upload the updated files to GitHub (or use git commands)
3. GitHub Pages will automatically rebuild and deploy your site

## Troubleshooting

### Common Issues:

1. **Site not loading**: Check that your repository is public
2. **404 errors**: Ensure `index.html` is in the root directory
3. **Styling issues**: Check that `styles.css` is properly linked
4. **Custom domain not working**: Verify DNS settings and CNAME file

### GitHub Pages Status:
- Check the "Actions" tab in your repository for deployment status
- Green checkmark = successful deployment
- Red X = deployment failed (check the logs)

## Performance Tips

1. **Optimize images**: Compress images before uploading
2. **Minimize files**: Remove unnecessary code and comments
3. **Use CDN**: External libraries (Font Awesome, Google Fonts) load from CDN
4. **Enable caching**: GitHub Pages automatically handles caching

## Security

- Your repository is public, so don't include sensitive information
- The contact form uses mailto: links (no server-side processing needed)
- All external links open in new tabs for security

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or contact GitHub support.
