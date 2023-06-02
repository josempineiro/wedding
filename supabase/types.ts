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
          table_position: number | null
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
          table_position?: number | null
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
          table_position?: number | null
          tags?: string
          wedding_id?: string
        }
      }
      table: {
        Row: {
          id: string
          name: string
          sorted_diner_ids: string[] | null
        }
        Insert: {
          id?: string
          name: string
          sorted_diner_ids?: string[] | null
        }
        Update: {
          id?: string
          name?: string
          sorted_diner_ids?: string[] | null
        }
      }
      wedding: {
        Row: {
          created_at: string
          datetime: string
          id: string
          name: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          datetime?: string
          id?: string
          name: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          datetime?: string
          id?: string
          name?: string
          updated_at?: string
          user_id?: string | null
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
