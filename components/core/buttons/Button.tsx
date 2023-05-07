import classNames from "classnames";
import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "default";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  size = "md",
  rounded,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames([
        className,
        "flex flex-row gap-4 justify-center items-center transition-colors duration-200 ease-in-out",
        {
          "bg-primary-400 hover:bg-primary-500": variant === "primary",
          "text-white ": variant === "primary",
          "px-2 py-1 text-sm": size === "sm",
          "px-4 py-2 text-md": size === "md",
          "px-6 py-3 text-lg": size === "lg",
          "py-2 h-8 w-8": size === "sm" && rounded,
          "p-2 h-14 w-14": size === "md" && rounded,
          "py-6 h-10 w-": size === "lg" && rounded,
          "rounded-full ": rounded,
          "rounded-md": !rounded,
        },
      ])}
    >
      {children}
    </button>
  );
};
