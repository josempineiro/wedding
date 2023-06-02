import { Mapper } from "@/domain/core/mapper/Mapper";
import { Guest } from "@/domain/wedding/entities/Guest";
import { GuestUpdateInput } from "@/infrastructure/graphql/apollo";

export class GuestInputMapper implements Mapper<Guest, GuestUpdateInput> {
  map(guest: Guest): GuestUpdateInput {
    return {
      id: guest.id,
      name: guest.name,
      email: guest.email,
      wedding_id: guest.weddingId,
      created_at: guest.createdAt.toISOString(),
      tags: guest.tags.join(","),
      birthday: guest.birthday?.toISOString() ?? undefined,
      table_id: guest.table?.id ?? null,
      table_position: guest.tablePosition,
    };
  }
}
