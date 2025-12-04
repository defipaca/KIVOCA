# Production Deployment Checklist

## ✅ Code Pushed to GitHub
- All changes committed and pushed to `defipaca/KIVOCA`
- Latest commit: `dac947f`

---

## 🚀 Deploy to Vercel

### If you haven't deployed yet:

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with GitHub
3. **Click "Add New Project"**
4. **Import** `defipaca/KIVOCA` repository
5. **Configure Project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
6. **Add Environment Variables** (see below)
7. **Click "Deploy"**

### If already deployed:

Vercel will **auto-deploy** when you push to GitHub! Just make sure environment variables are set.

---

## 🔐 Environment Variables (Required)

Add these in **Vercel Dashboard** → **Project Settings** → **Environment Variables**:

### Required for Supabase:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### Optional (but recommended):
```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

### For each environment:
- Add to **Production**
- Add to **Preview** (optional)
- Add to **Development** (optional)

---

## 📋 Pre-Deployment Checklist

### Before deploying, make sure:

- [ ] **Supabase table created** - Run `SUPABASE_FULL_SCHEMA.sql` in Supabase
- [ ] **Environment variables set** in Vercel
- [ ] **reCAPTCHA keys added** (if using)
- [ ] **Test form locally** - Make sure it works
- [ ] **Check all images load** - Verify property images display

---

## 🔍 After Deployment

1. **Visit your Vercel URL** (e.g., `https://kivoca.vercel.app`)
2. **Test the waitlist form:**
   - Fill out all fields
   - Submit
   - Check Supabase dashboard for the submission
3. **Check for errors:**
   - Browser console
   - Vercel deployment logs
4. **Verify images load** correctly

---

## 🌐 Custom Domain Setup

If you want to use your GoDaddy domain:

1. In Vercel: **Settings** → **Domains**
2. **Add domain** (e.g., `kivoca.com`)
3. Vercel will show DNS records
4. Share DNS records with your friend (see `DNS_RECORDS.md`)
5. Friend adds records in GoDaddy
6. Wait 24-48 hours for DNS propagation

---

## 🐛 Troubleshooting

**Build fails?**
- Check Vercel deployment logs
- Verify all environment variables are set
- Check for TypeScript errors

**Form not working?**
- Check Supabase credentials
- Verify table exists with correct schema
- Check browser console for errors

**Images not loading?**
- Verify image URLs are accessible
- Check `next.config.js` has correct domains

---

## 📊 Monitor Your Site

- **Vercel Dashboard**: View deployments, logs, analytics
- **Supabase Dashboard**: View form submissions
- **Google Analytics**: Add if needed (optional)

---

## ✅ Deployment Complete!

Once deployed, your site will be live at:
- **Vercel URL**: `https://kivoca-xxxxx.vercel.app`
- **Custom Domain**: `https://kivoca.com` (after DNS setup)

