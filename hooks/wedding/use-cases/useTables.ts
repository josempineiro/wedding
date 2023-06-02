import * as Apollo from "@apollo/client";
import {
  useTablesQuery,
  TableFragment,
  TablesQuery,
  TablesQueryVariables,
} from "@/infrastructure/graphql/apollo";
import { useWeddingMappers } from "@/hooks/wedding/mappers/useWeddingMappers";

export const useTables = (
  options?: Apollo.QueryHookOptions<TablesQuery, TablesQueryVariables>
) => {
  const { data, loading, error } = useTablesQuery(options);
  const { tableMapper } = useWeddingMappers();
  return {
    data: data?.tableCollection?.edges.map(
      ({ node }: { node: TableFragment }) => tableMapper.map(node)
    ),
    loading,
    error,
  };
};
