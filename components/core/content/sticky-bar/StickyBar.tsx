import classNames from "classnames";

interface StickyBarProps extends React.HTMLAttributes<HTMLDivElement> {
  position: "top" | "bottom";
}

export function StickyBar({
  children,
  className,
  position,
  ...rest
}: StickyBarProps): JSX.Element {
  return (
    <div
      {...rest}
      className={classNames([
        className,
        "sticky z-10 w-full flex items-center justify-center px-4 py-2 text-sm text-gray-700 bg-white border-b border-gray-200",
        {
          "top-0": position === "top",
          "bottom-0": position === "bottom",
        },
      ])}
    >
      {children}
    </div>
  );
}
