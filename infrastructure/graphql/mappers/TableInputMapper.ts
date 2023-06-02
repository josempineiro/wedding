import { Mapper } from "@/domain/core/mapper/Mapper";
import { Table } from "@/domain/wedding/entities/Table";
import { TableUpdateInput } from "@/infrastructure/graphql/apollo";

export class TableInputMapper implements Mapper<Table, TableUpdateInput> {
  map(table: Table): TableUpdateInput {
    return {
      id: table.id,
      name: table.name,
      sorted_diner_ids: table.guests.map((guest) => guest.id),
    };
  }
}
