import React from "react";
import classNames from "classnames";
import {
  Field as FieldInterface,
  FieldType,
} from "@/domain/core/forms/fields/Field";
import { motion, AnimatePresence } from "framer-motion";

export interface FieldProps<T extends FieldType>
  extends Omit<FieldInterface<T>, "defaultValue"> {
  children: React.ReactElement;
  className?: string;
  errors?: Array<string>;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export function Field<T extends FieldType>({
  label,
  errors,
  children,
  className,
  name,
  onFocus = () => {},
  onBlur = () => {},
}: FieldProps<T>) {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur(event);
  };
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus(event);
  };

  const hasErrors = errors && errors.length > 0;

  return (
    <div
      className={classNames([
        className,
        "flex flex-col relative border-b-2 border-gray-400",
        {
          "border-red-700": hasErrors,
          "border-primary-400": isFocused && !hasErrors,
        },
      ])}
    >
      <label
        htmlFor={name}
        aria-labelledby={name}
        className={classNames([
          "text-xs text-gray-500 px-2 font-bold tracking-wider leading-none uppercase",
        ])}
      >
        {label}
      </label>
      {React.cloneElement(children, {
        onBlur: handleBlur,
        onFocus: handleFocus,
      })}
      {errors && (
        <AnimatePresence>
          <motion.ul
            initial={{ opacity: 0, y: "0%" }}
            animate={{ opacity: 1, y: "100%" }}
            exit={{ opacity: 0, y: "0%" }}
            className="absolute -bottom-0.5 text-red-600 ml-2 text-xs"
          >
            {errors.map((error) => (
              <li key={error}>
                <p>{error}</p>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      )}
    </div>
  );
}
