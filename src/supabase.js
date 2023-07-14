import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://alyjiajpuprvxpaarrzm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFseWppYWpwdXBydnhwYWFycnptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzMjkyNjgsImV4cCI6MjAwMzkwNTI2OH0.zH3TpKRsZ5k_jBY-n-QusvLvoyUQnZlbyeiOCde7m5k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
