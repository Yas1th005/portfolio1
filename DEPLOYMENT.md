# Deployment Guide

This guide covers how to deploy your personal site to Vercel.

## Prerequisites

- Node.js 18+ installed locally
- A Vercel account (free tier available)
- Git repository hosted on GitHub, GitLab, or Bitbucket

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. **Connect your repository:**

   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your Git repository

2. **Configure build settings:**

   - Framework Preset: Next.js
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm ci` (auto-detected)

3. **Set environment variables:**

   - Go to your project settings → Environment Variables
   - Add the variables from `.env.example` (all are optional)
   - Set `NODE_ENV=production`

4. **Deploy:**
   - Click "Deploy"
   - Your site will be live in ~2 minutes

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

## Environment Variables

All environment variables are optional. The site will work without them, but some features may be disabled:

### Required for Full Functionality

- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` - Analytics tracking
- `NEXT_PUBLIC_UMAMI_WEBSITE_URL` - Analytics endpoint

### Optional Integrations

- `NEXT_PUBLIC_SPOTIFY_*` - Currently playing music widget
- `NEXT_PUBLIC_GITHUB_TOKEN` - GitHub contributions display
- `WAKATIME_SECRET_KEY` - Coding time statistics
- `NEXT_PUBLIC_LOGROCKET_ID` - User session recording

See `.env.example` for detailed descriptions and setup instructions.

## Custom Domain

1. **Add domain in Vercel:**

   - Go to your project → Settings → Domains
   - Add your custom domain

2. **Configure DNS:**

   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or add A records pointing to Vercel's IP addresses

3. **SSL Certificate:**
   - Automatically provisioned by Vercel
   - Usually takes 5-10 minutes

## Performance Optimizations

The site includes several performance optimizations:

- **Image Optimization:** Next.js Image component with WebP/AVIF support
- **Code Splitting:** Automatic route-based code splitting
- **Static Generation:** Pages are statically generated at build time
- **Caching Headers:** Optimized cache headers for static assets
- **Bundle Analysis:** Run `npm run build:analyze` to analyze bundle size

## Monitoring

- **Analytics:** Umami for privacy-friendly analytics
- **Performance:** Vercel Analytics and Speed Insights included
- **Error Tracking:** LogRocket for session recording (optional)

## Troubleshooting

### Build Failures

1. **Check Node.js version:**

   - Ensure you're using Node.js 18+
   - Vercel uses Node.js 18.x by default

2. **Clear cache:**

   ```bash
   rm -rf .next node_modules package-lock.json
   npm install
   npm run build
   ```

3. **Check environment variables:**
   - Ensure all required variables are set
   - Check for typos in variable names

### Runtime Issues

1. **Check function logs:**

   - Go to Vercel Dashboard → Functions tab
   - View real-time logs for debugging

2. **Verify API routes:**
   - Test API endpoints locally first
   - Check for CORS issues

## Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] **Repository**: Code is pushed to GitHub/GitLab/Bitbucket
- [ ] **Environment Variables**: All required variables are documented in `.env.example`
- [ ] **Build Test**: `npm run build` completes successfully
- [ ] **Type Check**: `npm run type-check` passes without errors
- [ ] **Linting**: `npm run lint` passes without warnings
- [ ] **Domain Ready**: Custom domain is available (if using one)
- [ ] **Analytics Setup**: Umami instance is configured (optional)
- [ ] **API Keys**: Spotify, GitHub, WakaTime tokens are ready (optional)

## Post-Deployment Steps

After successful deployment:

1. **Test the live site**: Verify all pages load correctly
2. **Check integrations**: Ensure Spotify, GitHub, and WakaTime data loads
3. **Verify analytics**: Confirm Umami tracking is working
4. **Test performance**: Use Lighthouse or similar tools
5. **Set up monitoring**: Configure alerts for downtime (optional)

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
