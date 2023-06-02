import * as Apollo from "@apollo/client";
import { Guest } from "@/domain/wedding/entities/Guest";
import {
  useDeleteGuestMutation,
  DeleteGuestMutation,
  DeleteGuestMutationVariables,
} from "@/infrastructure/graphql/apollo";
import { useWeddingMappers } from "@/hooks/wedding/mappers/useWeddingMappers";

export function useDeleteGuests(
  options?: Apollo.MutationHookOptions<
    DeleteGuestMutation,
    DeleteGuestMutationVariables
  >
): [
  (guest: Guest) => Promise<void>,
  ReturnType<typeof useDeleteGuestMutation>[1]
] {
  const { guestMapper, guestInputMapper } = useWeddingMappers();
  const [updateGuest, mutation] = useDeleteGuestMutation(options);
  return [
    async (guest) => {
      const { data } = await updateGuest({
        variables: {
          guestId: guest.id,
        },
      });
    },
    mutation,
  ];
}
