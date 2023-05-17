import { List } from "@/components/core/content/list/List";
import { ListProvider } from "@/components/core/content/list/ListProvider";
import { Table, TableId } from "@/domain/wedding/entities/Table";
import { TablesListItem } from "@/components/wedding/tables/list/TablesListItem";
import { useCallback } from "react";

export function TablesList({ tables }: { tables: Array<Table> }) {
  const getItemId = useCallback((item: Table) => item.id, []);
  return (
    <ListProvider<Table, TableId>
      getItemId={getItemId}
      data={tables}
      selectable
    >
      <List>
        {tables.map((table) => (
          <TablesListItem key={table.id} table={table} />
        ))}
      </List>
    </ListProvider>
  );
}
