import classNames from "classnames";
import React, { forwardRef, ForwardedRef } from "react";

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  direction?: "row" | "column";
}

function Form(
  { children, className, direction = "row", ...rest }: FormProps,
  ref?: ForwardedRef<HTMLFormElement>
) {
  return (
    <form
      ref={ref}
      className={classNames([
        className,
        "flex w-full gap-6 max-w-xl mx-auto",
        {
          "flex-row items-center justify-between": direction === "row",
          "flex-col items-stretch": direction === "column",
        },
      ])}
      {...rest}
    >
      {children}
    </form>
  );
}

const ForwardedForm = forwardRef(Form);

export { ForwardedForm as Form };
