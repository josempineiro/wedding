import { ListItem } from "@/components/core/content/list/ListItem";
import { Table, TableId } from "@/domain/wedding/entities/Table";
/*
import { DeleteTableButton } from "@/components/wedding/tables/actions/DeleteTableButton";
import { UpdateTableButton } from "@/components/wedding/tables/actions/UpdateTableButton";
*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMinus,
  faXmark,
  faCheck,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { useList } from "@/components/core/content/list/ListProvider";

export function TablesListItem({ table }: { table: Table }) {
  const list = useList<Table, TableId>();
  return (
    <ListItem className="p-2 flex gap-2 group" key={table.id} item={table}>
      <div className="flex flex-row gap-4 w-full">
        <div className="flex-1 flex items-center justify-between">
          <span>{table.name}</span>
        </div>
        {list.selection.selectedIds.length === 0 && (
          <>
            {/*
            <DeleteTableButton size="sm" rounded table={table}>
              <FontAwesomeIcon className="h-4 w-4" icon={faUserMinus} />
            </DeleteTableButton>
            <UpdateTableButton size="sm" rounded table={table}>
              <FontAwesomeIcon className="h-4 w-4" icon={faPen} />
            </UpdateTableButton>
            */}
          </>
        )}
      </div>
    </ListItem>
  );
}
