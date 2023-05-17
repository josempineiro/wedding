import { TableRepository } from "@/domain/wedding/repositories/TableRepository";
import { UseCase } from "@/domain/core/use-cases/UseCase";
import { Table } from "@/domain/wedding/entities/Table";

export class FindAllTablesUseCase implements UseCase<void, Array<Table>> {
  tablesRepository: TableRepository;
  constructor(tableRepository: TableRepository) {
    this.tablesRepository = tableRepository;
  }
  public async execute(): Promise<Array<Table>> {
    return await this.tablesRepository.findAll();
  }
  getId(): string {
    return "tables";
  }
  get name(): string {
    return "Find All Tables";
  }
}
