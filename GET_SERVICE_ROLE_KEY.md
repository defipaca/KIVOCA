# How to Get Your Supabase Service Role Key

## ⚠️ Important

The key you provided is an **anon key** (for client-side use). For the API route to work, you need the **service_role key** (for server-side use).

## Steps to Get Service Role Key:

1. **Go to your Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Select your project: `pfvcevqdniosvnhqfaha`

2. **Navigate to API Settings**
   - Click **Settings** (gear icon) in left sidebar
   - Click **API** under Project Settings

3. **Find Service Role Key**
   - Scroll down to **Project API keys**
   - Find **service_role** key (NOT the anon key)
   - Click **Reveal** or **Copy** button

4. **Add to Environment Variables**
   - Add to `.env.local`:
     ```
     SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
     ```

## ⚠️ Security Warning

- **service_role key** has admin access - NEVER expose it in client-side code
- Only use it in server-side API routes (which we're doing)
- Never commit it to git (already in `.gitignore`)

## Current Setup

✅ **Anon Key**: Already added (for client-side if needed later)
❌ **Service Role Key**: Need to add this for API route to work

Once you add the service_role key, the waitlist form will be able to save submissions to Supabase!

