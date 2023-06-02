import classNames from "classnames";
import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "default";
  size?: "xs" | "sm" | "md" | "lg";
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
      role="button"
      className={classNames([
        className,
        "flex flex-row gap-4 justify-center items-center transition-colors duration-200 ease-in-out font-bold tracking-wide",

        {
          "bg-primary-400 hover:bg-primary-500 text-white ":
            variant === "primary",
          "bg-secondary-400 hover:bg-secondary-500 text-white ":
            variant === "secondary",
          "bg-gray-200 hover:bg-gray-300 text-gray-700 ": variant === "default",
          "h-4 text-xs": size === "xs",
          "h-8 text-xs": size === "sm",
          "h-10 text-sm": size === "md",
          "h-12 text-md": size === "lg",
          "px-2": size === "xs" && !rounded,
          "px-3": size === "sm" && !rounded,
          "px-4": size === "md" && !rounded,
          "px-5": size === "lg" && !rounded,
          "p-0 w-4": size === "xs" && rounded,
          "p-0 w-8": size === "sm" && rounded,
          "p-0 w-10": size === "md" && rounded,
          "p-0 w-12": size === "lg" && rounded,
          "rounded-full ": rounded,
          "rounded-sm": !rounded,
        },
      ])}
      {...props}
    >
      {children}
    </button>
  );
};
