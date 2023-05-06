import React from "react";

export const Button = ({
  children,
  ...props
}: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};
