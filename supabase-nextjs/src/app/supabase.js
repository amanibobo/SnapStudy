import { createClient } from '@supabase/supabase-js';



const supabaseUrl = 'https://qdywpkzbkrvodswotpbq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkeXdwa3pia3J2b2Rzd290cGJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2OTQwMzcsImV4cCI6MjAxNDI3MDAzN30.TfgyXDgMr-IaDqdT_n0WnoN_01xX8kV79BU1kGn1wbw'


export const supabase = createClient(supabaseUrl, supabaseKey);