import * as Apollo from "@apollo/client";
import { Wedding } from "@/domain/wedding/entities/Wedding";
import {
  useWeddingsQuery as useWeddingsApolloQuery,
  WeddingFragment,
  WeddingsQuery,
  WeddingsQueryVariables,
} from "@/infrastructure/graphql/apollo";

export const useWeddings = (
  options?: Apollo.QueryHookOptions<WeddingsQuery, WeddingsQueryVariables>
) => {
  const { data, loading, error } = useWeddingsApolloQuery(options);
  return {
    data: data?.weddingCollection?.edges.map(
      ({ node }: { node: WeddingFragment }) =>
        Wedding.create({
          id: node.id,
          name: node.name,
          datetime: node.datetime ? new Date(node.datetime) : undefined,
        })
    ),
    loading,
    error,
  };
};
