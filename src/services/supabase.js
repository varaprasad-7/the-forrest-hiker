import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fxllikxfigshnxdfzlxm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4bGxpa3hmaWdzaG54ZGZ6bHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MjExNTIsImV4cCI6MjAyNTE5NzE1Mn0.ATHFvku0iwsMdEt9dhUnvp2CypfIon6K-8KlAFwL9LM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
