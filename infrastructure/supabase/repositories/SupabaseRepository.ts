import { Repository } from "@/domain/core/repositories/Repository";
import { Entity } from "@/domain/core/entities/Entity";
import { SupabaseClient } from "@supabase/supabase-js";

export interface SupabaseRepository<TEntity extends Entity, TRow>
  extends Repository<TEntity> {
  supabase: SupabaseClient;

  fromRowToEntity: (row: TRow) => TEntity;

  fromEntityToRow: (guest: TEntity) => TRow;
}
