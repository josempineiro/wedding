import { Table } from "@/domain/wedding/entities/Table";
import { TableRepository } from "@/domain/wedding/repositories/TableRepository";
import { MutationUseCase } from "@/domain/core/use-cases/MutationUseCase";

export class CreateTableUseCase
  implements MutationUseCase<Table, Table, Array<Table>>
{
  private tableRepository: TableRepository;
  constructor(tableRepository: TableRepository) {
    this.tableRepository = tableRepository;
  }
  public async execute(table: Table): Promise<Table> {
    return await this.tableRepository.save(table);
  }

  public optimisticExecute(
    table: Table,
    tables: Array<Table> | undefined
  ): Array<Table> {
    if (tables) {
      return [table, ...tables];
    }
    return [table];
  }

  getId(): string {
    return "tables";
  }
  get name(): string {
    return "Add Table";
  }
}
