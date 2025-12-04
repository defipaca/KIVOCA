# Setup Form Submissions - Step by Step

## Quick Start: Email Notifications (Recommended)

### Step 1: Install Resend
```bash
npm install resend
```

### Step 2: Get Resend API Key
1. Go to [resend.com](https://resend.com)
2. Sign up (free tier: 3,000 emails/month)
3. Go to API Keys → Create API Key
4. Copy your key (starts with `re_`)

### Step 3: Add Environment Variable
Create `.env.local` file:
```
RESEND_API_KEY=re_your_api_key_here
```

### Step 4: Update API Route
Uncomment the Resend code in `app/api/waitlist/route.ts` (Option 1 section)

### Step 5: Restart Dev Server
```bash
npm run dev
```

**Done!** Form submissions will now email `ey@kivoca.com`

---

## Alternative: Supabase + Email (More Features)

### Step 1: Install Packages
```bash
npm install @supabase/supabase-js resend
```

### Step 2: Setup Supabase
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to SQL Editor → Create table:
```sql
CREATE TABLE waitlist_submissions (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Step 3: Get API Keys
- Supabase URL and Service Role Key (from Supabase dashboard)
- Resend API Key (from resend.com)

### Step 4: Add Environment Variables
`.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=re_your_resend_key
```

### Step 5: Update API Route
Uncomment the Supabase code in `app/api/waitlist/route.ts` (Option 2 section)

---

## Test the Form

1. Fill out the form on your site
2. Submit
3. Check `ey@kivoca.com` inbox
4. Check browser console for any errors

---

## Troubleshooting

**Email not sending?**
- Check Resend API key is correct
- Check spam folder
- Verify domain in Resend (for production)

**API error?**
- Check browser console
- Check server logs
- Verify environment variables are set


