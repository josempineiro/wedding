import * as Apollo from "@apollo/client";
import { Guest } from "@/domain/wedding/entities/Guest";
import { Table } from "@/domain/wedding/entities/Table";
import {
  useUpdateGuestMutation,
  UpdateGuestMutation,
  UpdateGuestMutationVariables,
} from "@/infrastructure/graphql/apollo";
import { useWeddingMappers } from "@/hooks/wedding/mappers/useWeddingMappers";

export function useAssignGuestToTable(
  options?: Apollo.MutationHookOptions<
    UpdateGuestMutation,
    UpdateGuestMutationVariables
  >
): [
  (guest: Guest) => Promise<Guest | undefined>,
  ReturnType<typeof useUpdateGuestMutation>[1]
] {
  const { guestMapper, guestInputMapper } = useWeddingMappers();
  const [updateGuest, mutation] = useUpdateGuestMutation(options);
  return [
    async (guest) => {
      const { data } = await updateGuest({
        variables: {
          id: guest.id,
          guest: guestInputMapper.map(guest),
        },
      });
      const updatedGuest = data?.updateguestCollection?.records?.[0];
      if (updatedGuest) {
        return guestMapper.map(updatedGuest);
      }
    },
    mutation,
  ];
}
