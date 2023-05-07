import { Input, type InputProps } from "@/components/core/forms/Input";
import { Field, type FieldProps } from "@/components/core/forms/Field";

export interface TextFieldProps extends InputProps<string> {
  label?: FieldProps["label"];
  type?: "text" | "email" | "password";
  error?: FieldProps["error"];
  inputRef?: React.Ref<HTMLInputElement>;
}

export function TextField({ label, error, inputRef, ...rest }: TextFieldProps) {
  return (
    <Field error={error} label={label}>
      <Input<string> ref={inputRef} className="bg-white px-2 py-1" {...rest} />
    </Field>
  );
}
