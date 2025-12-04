# Setup Supabase for Waitlist Storage

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Click **"New Project"**
4. Fill in:
   - **Name**: KIVOCA (or any name)
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to your users
   - **Pricing Plan**: Free tier is fine to start
5. Click **"Create new project"**
6. Wait 2-3 minutes for project to initialize

## Step 2: Create Database Table

1. In your Supabase project, go to **SQL Editor** (left sidebar)
2. Click **"New query"**
3. Paste this SQL:

```sql
-- Create waitlist_submissions table
CREATE TABLE waitlist_submissions (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  accredited_investor TEXT NOT NULL,
  investment_amount TEXT NOT NULL,
  markets_interested TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist_submissions(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role to insert (for API)
-- Note: Service role bypasses RLS, so this is mainly for future use
CREATE POLICY "Allow service role full access"
ON waitlist_submissions
FOR ALL
USING (true)
WITH CHECK (true);
```

4. Click **"Run"** (or press Cmd/Ctrl + Enter)
5. You should see "Success. No rows returned"

## Step 3: Get API Keys

1. In Supabase dashboard, go to **Settings** (gear icon) → **API**
2. Copy these values:
   - **Project URL** (this is your `NEXT_PUBLIC_SUPABASE_URL`)
   - **service_role key** (this is your `SUPABASE_SERVICE_ROLE_KEY`)
     - ⚠️ **Important**: Use the `service_role` key (not `anon` key)
     - This key has admin access - keep it secret!

## Step 4: Add Environment Variables

Create or update `.env.local` file:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Optional: reCAPTCHA (if using)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
```

## Step 5: Install Supabase Package

```bash
npm install @supabase/supabase-js
```

## Step 6: Restart Dev Server

```bash
npm run dev
```

## Step 7: Test

1. Fill out the waitlist form on your site
2. Submit
3. Check Supabase dashboard:
   - Go to **Table Editor** → **waitlist_submissions**
   - You should see your submission!

## Viewing Submissions

### Option 1: Supabase Dashboard
- Go to **Table Editor** → **waitlist_submissions**
- View all submissions in a table
- Export as CSV if needed

### Option 2: SQL Query
In SQL Editor, run:
```sql
SELECT * FROM waitlist_submissions ORDER BY submitted_at DESC;
```

### Option 3: Build Admin Dashboard (Future)
You can create an admin page to view submissions with filters, search, etc.

## Troubleshooting

**"relation does not exist" error?**
- Make sure you ran the SQL to create the table
- Check table name is exactly `waitlist_submissions`

**"Invalid API key" error?**
- Verify you're using `service_role` key (not `anon` key)
- Check the key is copied correctly (no extra spaces)

**"Email already exists" error?**
- This is working correctly! The form prevents duplicate emails
- Check Supabase table to see existing submission

**Can't see data in Supabase?**
- Check you're looking at the right project
- Refresh the Table Editor
- Check the table name matches exactly

## Security Notes

- ✅ Service role key is server-side only (in `.env.local`)
- ✅ Row Level Security (RLS) is enabled
- ✅ Email uniqueness prevents duplicates
- ✅ reCAPTCHA protection against spam
- ⚠️ Never commit `.env.local` to git (already in `.gitignore`)

## Next Steps (Optional)

1. **Add email notifications**: Use Resend to email `ey@kivoca.com` when new submissions come in
2. **Build admin dashboard**: Create a page to view/manage submissions
3. **Export functionality**: Add CSV export for submissions
4. **Analytics**: Track submission trends over time

