# Setup Google reCAPTCHA v3

## Step 1: Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click **"+ Create"** to create a new site
3. Fill in the form:
   - **Label**: KIVOCA Waitlist
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: 
     - Add `localhost` (for development)
     - Add your production domain (e.g., `kivoca.com`, `www.kivoca.com`)
   - Accept the terms
4. Click **Submit**
5. Copy your **Site Key** and **Secret Key**

## Step 2: Add Environment Variables

Create or update `.env.local` file:

```bash
# reCAPTCHA Keys
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

**Important:**
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - This is public and safe to expose in client code
- `RECAPTCHA_SECRET_KEY` - This is private and must stay on the server

## Step 3: Restart Dev Server

```bash
npm run dev
```

## Step 4: Test

1. Fill out the waitlist form
2. Submit
3. Check browser console for any errors
4. Form should work with invisible reCAPTCHA protection

## How It Works

- **reCAPTCHA v3** is invisible - no checkbox needed
- It analyzes user behavior and gives a score (0.0-1.0)
- Score below 0.5 is considered suspicious
- The form will be blocked if reCAPTCHA verification fails

## Troubleshooting

**reCAPTCHA not working?**
- Check that site key is in `.env.local`
- Verify domain is added in reCAPTCHA admin console
- Check browser console for errors
- Make sure you're using the correct keys (v3, not v2)

**For Development:**
- If you don't have keys yet, the form will still work (without CAPTCHA protection)
- Add keys when ready for production

## Production Deployment

When deploying to Vercel/Netlify:
1. Add environment variables in your hosting platform:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`
2. Make sure your production domain is added in reCAPTCHA admin console
3. Redeploy your site

