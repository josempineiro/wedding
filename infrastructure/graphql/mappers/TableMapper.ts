import _ from "lodash";
import { Mapper } from "@/domain/core/mapper/Mapper";
import { Table } from "@/domain/wedding/entities/Table";
import { TableFragment } from "@/infrastructure/graphql/apollo";
import { GuestMapper } from "@/infrastructure/graphql/mappers/GuestMapper";

export class TableMapper implements Mapper<TableFragment, Table> {
  guestMapper: GuestMapper = new GuestMapper();
  map(tableFragment: TableFragment): Table {
    return Table.create({
      id: tableFragment.id,
      name: tableFragment.name,
      guests: _.sortBy(
        tableFragment.guestCollection?.edges.map(({ node }) =>
          this.guestMapper.map(node)
        ) ?? [],
        (guest) => tableFragment.sorted_diner_ids?.indexOf(guest.id)
      ),
    });
  }
}
