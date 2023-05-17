import { TableRepository } from "@/domain/wedding/repositories/TableRepository";
import { Table } from "@/domain/wedding/entities/Table";
import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/supabase/types";
import { SupabaseRepository } from "@/infrastructure/supabase/repositories/SupabaseRepository";

type TableRow = Database["public"]["Tables"]["table"]["Row"];

const fields = `id, name`;

export class SupabaseTableRepository
  implements TableRepository, SupabaseRepository<Table, TableRow>
{
  public supabase: SupabaseClient;

  constructor(supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  public fromRowToEntity(row: TableRow): Table {
    return Table.create({
      id: row.id,
      name: row.name,
      guests: [],
      host: undefined,
    });
  }
  public fromEntityToRow(table: Table): TableRow {
    return {
      id: table.id,
      name: table.name,
    };
  }

  private select(): PostgrestFilterBuilder<any, TableRow, TableRow[]> {
    return this.supabase.from("table").select<string, TableRow>(fields);
  }

  public async save(table: Table): Promise<Table> {
    const { data, error } = await this.supabase
      .from("table")
      .upsert(this.fromEntityToRow(table))
      .select(fields)
      .single();
    if (error) {
      throw error;
    }
    return this.fromRowToEntity(data);
  }

  public async saveAll(tables: Table[]): Promise<Table[]> {
    const { data, error } = await this.supabase
      .from("table")
      .upsert(tables.map(this.fromEntityToRow))
      .select(fields);
    if (error) {
      throw error;
    }
    return data.map(this.fromRowToEntity);
  }

  public async delete(tables: Table[]): Promise<void> {
    const { error } = await this.supabase
      .from("table")
      .delete()
      .in(
        "id",
        tables.map((table) => table.getId())
      );
    if (error) {
      throw error;
    }
  }

  public async findById(id: string): Promise<Table | undefined> {
    const { data, error } = await this.select().eq("id", id).single();
    if (error) {
      throw error;
    }
    return this.fromRowToEntity(data);
  }
  public async findAll(): Promise<Table[]> {
    const { data, error } = await this.select().order("name", {
      ascending: true,
    });
    if (error) {
      throw error;
    }
    return data.map(this.fromRowToEntity);
  }
  public async findByName(name: string): Promise<Table[]> {
    const { data, error } = await this.select().ilike("name", `%${name}%`);
    if (error) {
      throw error;
    }
    return data.map(this.fromRowToEntity);
  }
  public async findByEmail(email: string): Promise<Table[]> {
    const { data, error } = await this.select().ilike("email", `%${email}%`);
    if (error) {
      throw error;
    }
    return data.map(this.fromRowToEntity);
  }
  public async findByTable(tableId: string): Promise<Table[]> {
    throw new Error("Method not implemented.");
  }
}
