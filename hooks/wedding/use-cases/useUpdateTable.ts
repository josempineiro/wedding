import * as Apollo from "@apollo/client";
import { Table } from "@/domain/wedding/entities/Table";
import {
  useUpdateTableMutation,
  UpdateTableMutation,
  UpdateTableMutationVariables,
} from "@/infrastructure/graphql/apollo";
import { useWeddingMappers } from "@/hooks/wedding/mappers/useWeddingMappers";

export function useUpdateTable(
  options?: Apollo.MutationHookOptions<
    UpdateTableMutation,
    UpdateTableMutationVariables
  >
): [
  (table: Table) => Promise<Table | undefined>,
  ReturnType<typeof useUpdateTableMutation>[1]
] {
  const { tableMapper, tableInputMapper } = useWeddingMappers();
  const [updateTable, mutation] = useUpdateTableMutation(options);
  return [
    async (table) => {
      const { data } = await updateTable({
        variables: {
          id: table.id,
          table: tableInputMapper.map(table),
        },
      });
      const updatedTable = data?.updatetableCollection?.records?.[0];
      if (updatedTable) {
        return tableMapper.map(updatedTable);
      }
    },
    mutation,
  ];
}
