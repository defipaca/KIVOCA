-- ============================================
-- KIVOCA Waitlist Submissions - Full Schema
-- ============================================
-- Copy and paste this entire file into Supabase SQL Editor
-- Then click "Run" (or press Cmd/Ctrl + Enter)

-- Drop existing table if you want to start fresh
-- WARNING: This will delete all existing data!
-- DROP TABLE IF EXISTS waitlist_submissions;

-- Create the waitlist_submissions table with all fields
CREATE TABLE IF NOT EXISTS waitlist_submissions (
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
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist_submissions(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role full access
-- Note: Service role bypasses RLS, so this is mainly for future use
DROP POLICY IF EXISTS "Allow service role full access" ON waitlist_submissions;
CREATE POLICY "Allow service role full access"
ON waitlist_submissions
FOR ALL
USING (true)
WITH CHECK (true);

-- ============================================
-- If you already have the table, use this instead:
-- ============================================
-- Run this if the table already exists and you just want to add new columns

/*
ALTER TABLE waitlist_submissions 
ADD COLUMN IF NOT EXISTS full_name TEXT,
ADD COLUMN IF NOT EXISTS accredited_investor TEXT,
ADD COLUMN IF NOT EXISTS investment_amount TEXT,
ADD COLUMN IF NOT EXISTS markets_interested TEXT;

-- Update existing rows (if any) - optional
-- UPDATE waitlist_submissions 
-- SET full_name = COALESCE(name, 'Unknown')
-- WHERE full_name IS NULL;

-- Remove old 'name' column if it exists (optional)
-- ALTER TABLE waitlist_submissions DROP COLUMN IF EXISTS name;
*/

-- ============================================
-- Verify the table structure
-- ============================================
-- Run this to check your table structure:
-- SELECT column_name, data_type, is_nullable
-- FROM information_schema.columns
-- WHERE table_name = 'waitlist_submissions'
-- ORDER BY ordinal_position;

