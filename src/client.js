import { createClient } from '@supabase/supabase-js'

const URL = 'https://hbntluhfpqftqllazqjm.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhibnRsdWhmcHFmdHFsbGF6cWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODMwMzMsImV4cCI6MjA3Nzk1OTAzM30.lzbVe95SMFH3e9lzIIcl4oc-2SLr1WGf2Rf8615itSc'

export const supabase = createClient(URL, API_KEY)