/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `phone` (text)
      - `social` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `read` (boolean)
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for public insert access
    - Add policy for authenticated read access
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  social text,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a contact message
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can read messages
CREATE POLICY "Authenticated users can read messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);