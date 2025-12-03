# Deployment Guide for KIVOCA

## Quick Deploy to Vercel (Recommended - Free & Easy)

### Step 1: Push to GitHub

1. Create a new repository on GitHub (github.com)
2. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/kivoca.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your site will be live at: `https://kivoca.vercel.app` (or similar)

**That's it!** You'll get a shareable URL immediately.

---

## Linking GoDaddy Domain (After Deployment)

### What to Ask Your Friend:

1. **Domain name** (e.g., `kivoca.com` or `www.kivoca.com`)
2. **Access to GoDaddy DNS settings** OR ask them to add these DNS records:

### DNS Records to Add in GoDaddy:

Once deployed on Vercel, you'll get DNS records from Vercel. Ask your friend to add these in GoDaddy:

1. **A Record** (for root domain):
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21` (Vercel's IP - this may change, check Vercel dashboard)

2. **CNAME Record** (for www):
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com` (or the value Vercel provides)

### Steps in Vercel:

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `kivoca.com`)
4. Vercel will show you the exact DNS records to add
5. Share those records with your friend
6. Friend adds them in GoDaddy DNS management
7. Wait 24-48 hours for DNS propagation

---

## Alternative: Netlify (Also Free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login
3. Drag & drop your project folder OR connect GitHub
4. Get instant URL: `https://random-name.netlify.app`
5. Add custom domain in Netlify settings

---

## Environment Variables (If Needed)

If you set up the Tally form URL as an environment variable:

1. In Vercel: Project Settings → Environment Variables
2. Add: `NEXT_PUBLIC_FORM_URL` = `https://tally.so/r/your-actual-form-id`
3. Redeploy

---

## Quick Commands

```bash
# Build locally to test
npm run build

# Start production server locally
npm start

# Deploy to Vercel (if using Vercel CLI)
npm i -g vercel
vercel
```

