import classNames from "classnames";

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  error?: string;
  name: string;
}

export function Field({
  label,
  error,
  children,
  className,
  name,
  ...rest
}: FieldProps) {
  return (
    <div {...rest} className={classNames([className, "flex flex-col"])}>
      <label
        htmlFor={name}
        aria-labelledby={name}
        className={classNames(["text-sm text-gray-700 px-2"])}
      >
        {label}
      </label>
      {children}
      {error && <p>{error}</p>}
    </div>
  );
}
