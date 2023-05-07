import classNames from "classnames";
interface BarProps extends React.HTMLAttributes<HTMLDivElement> {
  position: "top" | "bottom";
  behavior: "sticky" | "fixed";
}

export function Bar({
  children,
  className,
  behavior,
  position,
  ...rest
}: BarProps): JSX.Element {
  return (
    <div
      {...rest}
      className={classNames([
        className,
        "z-10 w-full border-t-2 border-t-gray-200 flex items-center justify-center px-4 py-2 text-sm text-gray-700 bg-white border-b border-gray-200",
        {
          "top-0": position === "top",
          "bottom-0": position === "bottom",
          fixed: behavior === "fixed",
          sticky: behavior === "sticky",
        },
      ])}
    >
      {children}
    </div>
  );
}
