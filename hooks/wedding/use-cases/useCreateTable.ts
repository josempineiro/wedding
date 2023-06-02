import * as Apollo from "@apollo/client";
import { Table } from "@/domain/wedding/entities/Table";
import {
  useCreateTableMutation,
  CreateTableMutation,
  CreateTableMutationVariables,
} from "@/infrastructure/graphql/apollo";

export function useCreateTable(
  options?: Apollo.MutationHookOptions<
    CreateTableMutation,
    CreateTableMutationVariables
  >
): [
  (table: Table) => Promise<Table | undefined>,
  ReturnType<typeof useCreateTableMutation>[1]
] {
  const [createTable, mutation] = useCreateTableMutation({
    ...options,
    refetchQueries: ["tables"],
  });
  return [
    async (table) => {
      const { data } = await createTable({
        variables: {
          objects: [
            {
              name: table.name,
            },
          ],
        },
      });
      const createdTable = data?.insertIntotableCollection?.records?.[0];
      if (createdTable) {
        return Table.create(createdTable);
      }
    },
    mutation,
  ];
}
