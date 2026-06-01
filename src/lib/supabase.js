import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// 只有配置了有效的URL才创建客户端
export const supabase = supabaseUrl && supabaseUrl !== 'your_supabase_url'
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null
