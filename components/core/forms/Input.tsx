import cn from "classnames";
import { forwardRef, ForwardedRef } from "react";

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export interface InputProps<T>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: T, event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input<T = string>(
  { className, onChange, ...props }: InputProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value as T, event);
    }
  };
  return (
    <input
      className={cn([
        className,
        "text-md ring-none min-w-0 w-20 bg-transparent outline-none",
      ])}
      onChange={handleChange}
      {...props}
      ref={ref}
    />
  );
}

const ForwardedInput = forwardRef(Input);

export { ForwardedInput as Input };
