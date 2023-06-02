import { Mapper } from "@/domain/core/mapper/Mapper";
import { Guest } from "@/domain/wedding/entities/Guest";
import { GuestConnection } from "@/infrastructure/graphql/apollo";
import { GuestMapper } from "@/infrastructure/graphql/mappers/GuestMapper";

export class GuestCollectionMapper
  implements Mapper<GuestConnection, Array<Guest>>
{
  guestMapper: GuestMapper = new GuestMapper();
  map(guestCollection: GuestConnection): Array<Guest> {
    return guestCollection.edges.map(({ node }) => this.guestMapper.map(node));
  }
}
