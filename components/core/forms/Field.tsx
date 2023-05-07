import classNames from "classnames";

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  error?: string;
}

export function Field({
  label,
  error,
  children,
  className,
  ...rest
}: FieldProps) {
  return (
    <div {...rest} className={classNames([className, "flex flex-col"])}>
      <label className={classNames(["text-sm text-gray-700 px-2"])}>
        {label}
      </label>
      {children}
      {error && <p>{error}</p>}
    </div>
  );
}
