import classNames from "classnames";
import { Input, type InputProps } from "@/components/core/forms/input/Input";
import { DateField as CoreDateField } from "@/domain/core/forms/fields/DateField";
import { Field, type FieldProps } from "@/components/core/forms/field/Field";

export interface DateFieldProps
  extends Omit<
      InputProps<string>,
      "name" | "value" | "type" | "onChange" | "defaultValue" | "type"
    >,
    Omit<FieldProps<Date>, "children" | "value" | "type"> {
  inputRef?: React.Ref<HTMLInputElement>;
  onChange: (date: Date, event: React.ChangeEvent<HTMLInputElement>) => void;
  value: Date | undefined;
}

export function DateField({
  label,
  errors,
  name,
  inputRef,
  onChange,
  value,
  ...rest
}: DateFieldProps) {
  const handleChange = (
    stringDate: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const date = new Date(stringDate);
    onChange(date, event);
  };
  const stringValue = value?.toISOString().substr(0, 10) ?? "";
  return (
    <Field type="date" errors={errors} label={label} name={name}>
      <Input<string>
        ref={inputRef}
        id={name}
        name={name}
        className={classNames("bg-white w-full px-2 py-1", {
          "text-gray-400": stringValue === "",
        })}
        type="date"
        onChange={handleChange}
        value={stringValue}
        {...rest}
      />
    </Field>
  );
}
