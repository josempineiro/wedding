import { Repository } from "@/domain/core/repositories/Repository";
import { Table } from "@/domain/wedding/entities/Table";
import { Guest } from "@/domain/wedding/entities/Guest";

export interface TableRepository extends Repository<Table> {
  findByName(name: string): Promise<Table[]>;
}
