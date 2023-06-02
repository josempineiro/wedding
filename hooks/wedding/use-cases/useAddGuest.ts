import * as Apollo from "@apollo/client";
import { Guest } from "@/domain/wedding/entities/Guest";
import {
  useCreateGuestMutation,
  CreateGuestMutation,
  CreateGuestMutationVariables,
} from "@/infrastructure/graphql/apollo";
import { useWeddingMappers } from "@/hooks/wedding/mappers/useWeddingMappers";

export function useAddGuest(
  options?: Apollo.MutationHookOptions<
    CreateGuestMutation,
    CreateGuestMutationVariables
  >
): [
  (guest: Guest) => Promise<Guest | undefined>,
  ReturnType<typeof useCreateGuestMutation>[1]
] {
  const { guestMapper, guestInputMapper } = useWeddingMappers();
  const [createGuest, mutation] = useCreateGuestMutation({
    ...options,
    refetchQueries: ["guests"],
  });
  return [
    async (guest) => {
      const { data } = await createGuest({
        variables: {
          objects: [guestInputMapper.map(guest)],
        },
      });
      const createdGuest = data?.insertIntoguestCollection?.records?.[0];
      if (createdGuest) {
        return guestMapper.map(createdGuest);
      }
    },
    mutation,
  ];
}
