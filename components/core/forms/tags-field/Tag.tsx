import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/core/buttons/Button";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  closable?: boolean;
}

export function Tag({
  children,
  className,
  onClose,
  closable,
  ...rest
}: TagProps) {
  return (
    <div
      role="tag"
      className={classNames([
        className,
        "inline-flex items-center rounded-sm gap-4 px-2 py-1",
      ])}
      {...rest}
    >
      <span>{children}</span>
      {closable && (
        <Button onClick={onClose} size="sm" rounded role="delete-tag">
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      )}
    </div>
  );
}
