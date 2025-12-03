# Step 1: Push to GitHub - Step by Step

## Create GitHub Repository

1. Go to **https://github.com** and sign in (or create account)
2. Click the **"+"** icon in top right → **"New repository"**
3. Repository name: `kivoca` (or any name you like)
4. Make it **Public** (or Private if you prefer)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

## Push Your Code

After creating the repo, GitHub will show you commands. Use these:

```bash
cd /Users/yh/Desktop/KIVOCA
git remote add origin https://github.com/YOUR_USERNAME/kivoca.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

If it asks for credentials:
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password)
  - Get token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token
  - Give it "repo" permissions

---

## After Pushing Successfully

You should see your files on GitHub. Then proceed to Step 2 (Vercel deployment).

