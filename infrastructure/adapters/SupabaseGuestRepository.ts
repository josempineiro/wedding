import { GuestRepository } from "@/domain/wedding/repositories/GuestRepository";
import { Guest } from "@/domain/wedding/entities/Guest";
import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/supabase/types";

type GuestRow = Database["public"]["Tables"]["guest"]["Row"];

const fields = `id, name, email, created_at, wedding_id`;

export class SupabaseGuestRepository implements GuestRepository {
  private supabase: SupabaseClient;

  constructor(supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  private fromRowToEntity(row: GuestRow): Guest {
    return Guest.create({
      id: row.id,
      name: row.name,
      email: row.email || "",
      weddingId: row.wedding_id,
      createdAt: new Date(row.created_at),
    });
  }

  private select(): PostgrestFilterBuilder<any, GuestRow, GuestRow[]> {
    return this.supabase.from("guest").select<string, GuestRow>(fields);
  }

  public async save(guest: Guest): Promise<Guest> {
    const { data, error } = await this.supabase
      .from("guest")
      .insert([
        {
          name: guest.name,
          email: guest.email,
          wedding_id: "95f2e638-0023-4316-8868-6550f9bf1db3",
        },
      ])
      .select(`id, name, email, created_at, wedding_id`)
      .single();
    if (error) {
      throw error;
    }
    return this.fromRowToEntity(data);
  }

  public async delete(guest: Guest): Promise<void> {
    const { error } = await this.supabase
      .from("countries")
      .delete()
      .eq("id", guest.getId());
    if (error) {
      throw error;
    }
  }
  public async findById(id: string): Promise<Guest | undefined> {
    const { data, error } = await this.select().eq("id", id).single();
    if (error) {
      throw error;
    }
    return this.fromRowToEntity(data);
  }
  public async findAll(): Promise<Guest[]> {
    const { data, error } = await this.select();
    if (error) {
      throw error;
    }
    debugger;
    return data.map(this.fromRowToEntity);
  }
  public async findByName(name: string): Promise<Guest[]> {
    const { data, error } = await this.select().ilike("name", `%${name}%`);
    if (error) {
      throw error;
    }
    return data.map(this.fromRowToEntity);
  }
  public async findByEmail(email: string): Promise<Guest[]> {
    const { data, error } = await this.select().ilike("email", `%${email}%`);
    if (error) {
      throw error;
    }
    return data.map(this.fromRowToEntity);
  }
  public async findByTable(tableId: string): Promise<Guest[]> {
    throw new Error("Method not implemented.");
  }
}
