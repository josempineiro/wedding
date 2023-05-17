export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      guest: {
        Row: {
          birthday: string | null
          created_at: string
          email: string | null
          id: string
          name: string
          table_id: string | null
          tags: string
          wedding_id: string
        }
        Insert: {
          birthday?: string | null
          created_at?: string
          email?: string | null
          id: string
          name: string
          table_id?: string | null
          tags?: string
          wedding_id: string
        }
        Update: {
          birthday?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          table_id?: string | null
          tags?: string
          wedding_id?: string
        }
      }
      table: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
      }
      wedding: {
        Row: {
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
