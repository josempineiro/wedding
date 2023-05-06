import {
  useState,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from "react";

interface ListProviderProps<T, TId> {
  children: React.ReactNode;
  selectable?: boolean;
  data: Array<T>;
  getItemId: (item: T) => TId;
}

export interface ListContextValue<T = any, TId = any> {
  data: Array<T>;
  selection: {
    selectable: boolean;
    selectedIds: Array<TId>;
    isItemSelected: (item: T) => boolean;
    toggleItem: (item: T) => void;
    selectedItems: Array<T>;
    clear: () => void;
    selectAll: () => void;
  };
}

export interface ListItemHookValue<T = any, TId = any> {
  selectable: boolean;
  selected: boolean;
  toggle: () => void;
}

export const ListContext = createContext<ListContextValue | undefined>(
  undefined
);

export function useList<T, TId>(): ListContextValue<T, TId> {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error("useList must be used within a ListProvider");
  }
  return context;
}

export function useListItem<T, TId>(item: T): ListItemHookValue<T, TId> {
  const context = useList();
  return {
    selectable: context.selection.selectable,
    selected: context.selection.isItemSelected(item),
    toggle: () => context.selection.toggleItem(item),
  };
}

export function ListProvider<T, TId = string>({
  children,
  data,
  selectable,
  getItemId,
}: ListProviderProps<T, TId>) {
  const [selectedIds, setSelectedIds] = useState<Array<TId>>([]);

  const toggleItem = (item: T) => {
    const itemId = getItemId(item);
    if (selectedIds.includes(itemId)) {
      setSelectedIds(selectedIds.filter((id) => id !== itemId));
    } else {
      setSelectedIds([...selectedIds, itemId]);
    }
  };

  const isItemSelected = useCallback(
    (item: T) => {
      return selectedIds.includes(getItemId(item));
    },
    [selectedIds, getItemId]
  );

  const selectedItems = useMemo(() => {
    return data.filter(isItemSelected);
  }, [data, isItemSelected]);

  return (
    <ListContext.Provider
      value={{
        data,
        selection: {
          selectable: Boolean(selectable),
          selectedIds,
          selectedItems,
          isItemSelected,
          toggleItem,
          clear: () => setSelectedIds([]),
          selectAll: () => setSelectedIds(data.map(getItemId)),
        },
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
