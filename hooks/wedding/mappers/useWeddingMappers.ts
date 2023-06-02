import { GuestMapper } from "@/infrastructure/graphql/mappers/GuestMapper";
import { GuestInputMapper } from "@/infrastructure/graphql/mappers/GuestInputMapper";
import { TableMapper } from "@/infrastructure/graphql/mappers/TableMapper";
import { TableInputMapper } from "@/infrastructure/graphql/mappers/TableInputMapper";
import { TableCollectionMapper } from "@/infrastructure/graphql/mappers/TableCollectionMapper";
import { GuestCollectionMapper } from "@/infrastructure/graphql/mappers/GuestCollectionMapper";

export function useWeddingMappers() {
  return {
    guestMapper: new GuestMapper(),
    guestInputMapper: new GuestInputMapper(),
    tableMapper: new TableMapper(),
    tableCollectionMapper: new TableCollectionMapper(),
    guestCollectionMapper: new GuestCollectionMapper(),
    tableInputMapper: new TableInputMapper(),
  };
}
