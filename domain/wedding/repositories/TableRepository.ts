import { Repository } from "@/domain/core/repositories/Repository";
import { Table } from "@/domain/wedding/entities/Table";

export interface TableRepository extends Repository<Table> {
  findByName(name: string): Promise<Table[]>;
}
