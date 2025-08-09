import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      cart_items: {
        Row: {
          id: string
          user_id: string
          product_id: string
          product_title: string
          product_price: number
          product_image: string
          quantity: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          product_title: string
          product_price: number
          product_image: string
          quantity?: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          product_title?: string
          product_price?: number
          product_image?: string
          quantity?: number
          created_at?: string
        }
      }
    }
  }
}