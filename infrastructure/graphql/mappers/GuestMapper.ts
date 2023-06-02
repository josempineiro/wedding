import { Mapper } from "@/domain/core/mapper/Mapper";
import { Guest } from "@/domain/wedding/entities/Guest";
import { Table } from "@/domain/wedding/entities/Table";
import { GuestFragment, TableFragment } from "@/infrastructure/graphql/apollo";

export class GuestMapper implements Mapper<GuestFragment, Guest> {
  mapGuestTable(tableFragment: TableFragment): Table {
    return Table.create({
      id: tableFragment.id,
      name: tableFragment.name,
    });
  }
  map(guestFragment: GuestFragment): Guest {
    return Guest.create({
      id: guestFragment.id,
      name: guestFragment.name,
      email: guestFragment.email || "",
      weddingId: guestFragment.wedding?.id || "",
      createdAt: new Date(guestFragment.created_at),
      tags: guestFragment.tags.split(",") ?? [],
      birthday: guestFragment.birthday
        ? new Date(guestFragment.birthday)
        : undefined,
      table: guestFragment.table
        ? this.mapGuestTable(guestFragment.table)
        : undefined,
    });
  }
}
