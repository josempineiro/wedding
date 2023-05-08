import { Input, type InputProps } from "@/components/core/forms/input/Input";
import { Field, type FieldProps } from "@/components/core/forms/field/Field";

export interface TextFieldProps extends InputProps<string> {
  label?: FieldProps["label"];
  type?: "text" | "email" | "password";
  error?: FieldProps["error"];
  inputRef?: React.Ref<HTMLInputElement>;
  name: FieldProps["name"];
}

export function TextField({
  label,
  error,
  name,
  inputRef,
  ...rest
}: TextFieldProps) {
  return (
    <Field error={error} label={label} name={name}>
      <Input<string>
        ref={inputRef}
        id={name}
        name={name}
        className="bg-white px-2 py-1"
        {...rest}
      />
    </Field>
  );
}
