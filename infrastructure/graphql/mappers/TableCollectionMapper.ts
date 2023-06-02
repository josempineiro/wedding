import _ from "lodash";
import { Mapper } from "@/domain/core/mapper/Mapper";
import { Table } from "@/domain/wedding/entities/Table";
import { TableConnection } from "@/infrastructure/graphql/apollo";
import { TableMapper } from "@/infrastructure/graphql/mappers/TableMapper";

export class TableCollectionMapper
  implements Mapper<TableConnection, Array<Table>>
{
  tableMapper: TableMapper = new TableMapper();
  map(tableCollection: TableConnection): Array<Table> {
    return tableCollection.edges.map(({ node }) => this.tableMapper.map(node));
  }
}
