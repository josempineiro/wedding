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
        "flex flex-row gap-4 justify-center items-center transition-colors duration-200 ease-in-out",
        {
          "bg-primary-400 hover:bg-primary-500 text-white ":
            variant === "primary",
          "bg-secondary-400 hover:bg-secondary-500 text-white ":
            variant === "secondary",
          "bg-gray-200 hover:bg-gray-300 text-gray-700 ": variant === "default",
          "px-2 py-1 text-xs": size === "xs",
          "px-3 py-1.5 text-xs": size === "sm",
          "px-4 py-2 text-sm": size === "md",
          "px-6 py-3 text-md": size === "lg",
          "px-1 h-4 w-4": size === "xs" && rounded,
          "px-1.5 h-5 w-5": size === "sm" && rounded,
          "px-2 h-8 w-8": size === "md" && rounded,
          "px-3 h-12 w-12": size === "lg" && rounded,
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
