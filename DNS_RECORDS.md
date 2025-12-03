# Step 3: DNS Records for GoDaddy - Share with Your Friend

## What Your Friend Needs to Do in GoDaddy

### Step 1: Access DNS Settings

1. Log into **GoDaddy.com**
2. Go to **"My Products"** → **"Domains"**
3. Find your domain (e.g., `kivoca.com`)
4. Click **"DNS"** or **"Manage DNS"**

### Step 2: Get DNS Records from Vercel

**First, you need to add the domain in Vercel:**

1. Go to your Vercel project dashboard
2. Click **"Settings"** tab
3. Click **"Domains"** in left sidebar
4. Enter your domain (e.g., `kivoca.com`)
5. Click **"Add"**
6. Vercel will show you the DNS records needed

### Step 3: DNS Records to Add in GoDaddy

**Remove any existing A records for `@` and `www` first!**

Then add these records (Vercel will show the exact values):

#### Record 1: A Record (Root Domain)
- **Type**: `A`
- **Name**: `@` (or leave blank, or `kivoca.com`)
- **Value**: `76.76.21.21` (or the IP Vercel provides)
- **TTL**: `600` (or default)

#### Record 2: CNAME Record (WWW)
- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `cname.vercel-dns.com` (or the value Vercel provides)
- **TTL**: `600` (or default)

### Step 4: Wait for Propagation

- DNS changes take **24-48 hours** to fully propagate
- Usually works within **1-2 hours**
- Check status in Vercel dashboard

---

## Example Email to Send Your Friend

```
Hi! I need help setting up DNS for kivoca.com on GoDaddy.

Please:
1. Log into GoDaddy
2. Go to My Products → Domains → kivoca.com → DNS
3. Remove any existing A records for @ and www
4. Add these new records:

A Record:
- Type: A
- Name: @
- Value: 76.76.21.21
- TTL: 600

CNAME Record:
- Type: CNAME  
- Name: www
- Value: cname.vercel-dns.com
- TTL: 600

After adding, it may take 24-48 hours to work, but usually happens within 1-2 hours.

Thanks!
```

---

## Verify It's Working

1. Check Vercel dashboard - domain should show "Valid Configuration"
2. Visit your domain in browser
3. If it doesn't work immediately, wait a few hours (DNS propagation)

---

## Troubleshooting

**Domain not working?**
- Wait 24-48 hours for DNS propagation
- Check Vercel dashboard for any errors
- Verify DNS records match exactly what Vercel shows
- Make sure no conflicting records exist in GoDaddy

**Need to update?**
- Changes in Vercel auto-deploy
- DNS changes need to propagate again (24-48 hours)

