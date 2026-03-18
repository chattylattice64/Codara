// supabase.js - Supabase Configuration
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://ajfabbkuwlpgjzmavwmn.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqZmFiYmt1d2xwZ2p6bWF2d21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5MDQ1MDAsImV4cCI6MjA4MzQ4MDUwMH0.U4-Em5-yvi_l-lXl7Q_a7jgVTKWAEUcmrHQncN3AHg4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
