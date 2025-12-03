# Deploy Key Setup - KIVOCA

## ✅ SSH Key Generated!

A deploy key has been generated for you. Here's how to use it:

## Step 1: Add Public Key to GitHub

1. Go to: **https://github.com/defipaca/kivoca/settings/keys**
   - Or: Repository → Settings → Deploy keys → Add deploy key

2. **Title**: `KIVOCA Deploy Key` (or any name)

3. **Key**: Copy the public key below and paste it:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIICyg9cLPfYmKtgl0ljeT9jcv7YeqTSEnBj7+e18+S3Y kivoca-deploy-key
```

4. ✅ Check **"Allow write access"** (if you want to push)
5. Click **"Add key"**

## Step 2: Configure SSH for This Repository

The git remote is already configured to use SSH. To use the deploy key, add this to your SSH config:

```bash
# Add to ~/.ssh/config
cat >> ~/.ssh/config << 'EOF'
Host github.com-kivoca
    HostName github.com
    User git
    IdentityFile ~/.ssh/kivoca_deploy_key
    IdentitiesOnly yes
EOF
```

Then update the remote:
```bash
cd /Users/yh/Desktop/KIVOCA
git remote set-url origin git@github.com-kivoca:defipaca/kivoca.git
```

## Step 3: Test Connection

```bash
ssh -T git@github.com-kivoca
```

Should return: `Hi defipaca/kivoca! You've successfully authenticated...`

## Step 4: Push Your Code

```bash
cd /Users/yh/Desktop/KIVOCA
git push -u origin main
```

---

## Alternative: Use SSH Key Directly

If you don't want to modify SSH config, you can use:

```bash
GIT_SSH_COMMAND="ssh -i ~/.ssh/kivoca_deploy_key" git push -u origin main
```

---

## Security Notes

- ✅ Private key is at: `~/.ssh/kivoca_deploy_key` (keep this secret!)
- ✅ Public key is at: `~/.ssh/kivoca_deploy_key.pub` (safe to share)
- ⚠️ Never commit the private key to git
- ⚠️ The private key is already in `.gitignore`

---

## Troubleshooting

**Permission denied?**
- Make sure you added the public key to GitHub
- Check that "Allow write access" is enabled
- Verify SSH config is correct

**Key not found?**
- Check key exists: `ls -la ~/.ssh/kivoca_deploy_key*`
- Regenerate if needed: `ssh-keygen -t ed25519 -f ~/.ssh/kivoca_deploy_key`

