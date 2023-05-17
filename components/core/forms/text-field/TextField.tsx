import { Input, type InputProps } from "@/components/core/forms/input/Input";
import { Field, type FieldProps } from "@/components/core/forms/field/Field";

export interface TextFieldProps
  extends Omit<InputProps<string>, "name" | "value" | "type">,
    Omit<FieldProps<string>, "children"> {
  type: "text" | "email" | "password";
  inputRef?: React.Ref<HTMLInputElement>;
}

export function TextField({
  label,
  errors,
  name,
  inputRef,
  ...rest
}: TextFieldProps) {
  return (
    <Field type="text" errors={errors} label={label} name={name}>
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
