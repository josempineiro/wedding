import * as Apollo from "@apollo/client";
import {
  useGuestsQuery as useGuestsApolloQuery,
  GuestFragment,
  GuestsQueryVariables,
  GuestsQuery,
} from "@/infrastructure/graphql/apollo";
import { useWeddingMappers } from "@/hooks/wedding/mappers/useWeddingMappers";

export const useGuests = (
  options?: Apollo.QueryHookOptions<GuestsQuery, GuestsQueryVariables>
) => {
  const { data, loading, error } = useGuestsApolloQuery(options);

  const { guestMapper } = useWeddingMappers();
  return {
    data: data?.guestCollection?.edges.map(
      ({ node }: { node: GuestFragment }) => guestMapper.map(node)
    ),
    loading,
    error,
  };
};
