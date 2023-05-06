import classNames from "classnames";
import { useListItem } from "./ListProvider";

export interface ListItemProps<T = any>
  extends React.HTMLAttributes<HTMLLIElement> {
  item: T;
}

export const ListItem = <T, TId>({
  children,
  item,
  className,
  ...rest
}: ListItemProps<T>): JSX.Element => {
  const { selectable, selected, toggle } = useListItem<T, TId>(item);
  return (
    <li
      {...rest}
      className={classNames([
        className,
        "flex items-center justify-between px-4 py-2 text-sm text-gray-700 border-b border-gray-200",
        {
          ["hover:bg-gray-100"]: selectable,
          ["bg-gray-100"]: selected,
        },
      ])}
    >
      {selectable && (
        <input
          type="checkbox"
          checked={selected}
          onChange={toggle}
          className={classNames([
            {
              ["hover:bg-gray-100"]: selectable,
              ["cursor-pointer"]: selectable,
              ["bg-gray-100"]: selected,
            },
          ])}
        />
      )}
      {children}
    </li>
  );
};
