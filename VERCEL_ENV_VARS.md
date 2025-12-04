# Vercel Environment Variables - Copy & Paste

## Add These to Vercel Dashboard

Go to: **Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**

Then add these three variables (for Production environment):

---

### Variable 1:
**Name:** `NEXT_PUBLIC_SUPABASE_URL`  
**Value:** `https://pfvcevqdniosvnhqfaha.supabase.co`

---

### Variable 2:
**Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`  
**Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmdmNldnFkbmlvc3ZuaHFmYWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MjIyNDksImV4cCI6MjA4MDM5ODI0OX0.1zpLWQD3zBU4hSJU0J5ByDB2penBE_kVMJ-r6YO9vsE`

---

### Variable 3:
**Name:** `SUPABASE_SERVICE_ROLE_KEY`  
**Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmdmNldnFkbmlvc3ZuaHFmYWhhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDgyMjI0OSwiZXhwIjoyMDgwMzk4MjQ5fQ.vFBwADPqHIcSMdqjYFk3Pzr_JNzBT64768znxfhoWrQ`

---

## Steps in Vercel:

1. Go to your project in Vercel
2. Click **Settings** tab
3. Click **Environment Variables** in left sidebar
4. Click **Add New**
5. For each variable:
   - Paste the **Name**
   - Paste the **Value**
   - Select **Production** (and Preview/Development if you want)
   - Click **Save**
6. **Redeploy** your project (or wait for auto-deploy from GitHub push)

---

## After Adding Variables:

1. **Redeploy** in Vercel (or it will auto-deploy from GitHub)
2. **Test the form** on your live site
3. **Check Supabase** dashboard to see submissions

---

## Important Notes:

- ✅ These keys are safe to add to Vercel (server-side)
- ✅ Vercel will use them for all deployments
- ⚠️ Never commit `.env.local` to git (already in `.gitignore`)
- ⚠️ Service role key should only be in Vercel, not exposed to client

