# Step 2: Deploy to Vercel - Step by Step

## Deploy Your Site

1. Go to **https://vercel.com**
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (easiest option)
4. Authorize Vercel to access your GitHub account

## Import Your Project

1. Click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories
3. Find **"kivoca"** (or whatever you named it)
4. Click **"Import"**

## Configure Project

1. **Project Name**: `kivoca` (or leave default)
2. **Framework Preset**: Should auto-detect "Next.js" ✅
3. **Root Directory**: `./` (leave as is)
4. **Build Command**: `npm run build` (should be auto-filled)
5. **Output Directory**: `.next` (should be auto-filled)

## Environment Variables (Optional)

If you want to set the Tally form URL:
- Click **"Environment Variables"**
- Add: `NEXT_PUBLIC_FORM_URL` = `https://tally.so/r/your-actual-form-id`

## Deploy!

1. Click **"Deploy"**
2. Wait 1-2 minutes for build to complete
3. **🎉 Your site is live!**

You'll get a URL like: `https://kivoca.vercel.app`

---

## Next: Add Custom Domain

After deployment, go to Step 3 for domain setup.

