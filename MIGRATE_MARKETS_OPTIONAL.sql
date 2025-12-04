-- ============================================
-- Migration: Make markets_interested optional
-- ============================================
-- Run this in Supabase SQL Editor if you already have the table
-- This makes the markets_interested field nullable (optional)

ALTER TABLE waitlist_submissions 
ALTER COLUMN markets_interested DROP NOT NULL;

-- Verify the change
-- SELECT column_name, data_type, is_nullable
-- FROM information_schema.columns
-- WHERE table_name = 'waitlist_submissions'
-- AND column_name = 'markets_interested';

