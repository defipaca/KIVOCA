-- Update Supabase table schema for new form fields
-- Run this in Supabase SQL Editor

-- First, drop the old table if you want to start fresh (WARNING: This deletes all data)
-- DROP TABLE IF EXISTS waitlist_submissions;

-- Or update existing table with new columns
ALTER TABLE waitlist_submissions 
ADD COLUMN IF NOT EXISTS full_name TEXT,
ADD COLUMN IF NOT EXISTS accredited_investor TEXT,
ADD COLUMN IF NOT EXISTS investment_amount TEXT,
ADD COLUMN IF NOT EXISTS markets_interested TEXT;

-- Update existing rows to have null for new fields (if any exist)
-- UPDATE waitlist_submissions 
-- SET full_name = name 
-- WHERE full_name IS NULL AND name IS NOT NULL;

-- Remove old 'name' column if you want (optional - you can keep it for backward compatibility)
-- ALTER TABLE waitlist_submissions DROP COLUMN IF EXISTS name;

-- Make email unique if not already
ALTER TABLE waitlist_submissions 
ADD CONSTRAINT waitlist_submissions_email_key UNIQUE (email);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist_submissions(email);

