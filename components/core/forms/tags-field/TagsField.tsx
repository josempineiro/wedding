import { Tags } from "@/components/core/forms/tags-field/Tags";
import { Field, type FieldProps } from "@/components/core/forms/field/Field";
import { Input, type InputProps } from "@/components/core/forms/input/Input";

export interface TagsFieldProps
  extends Omit<InputProps<string>, "onChange" | "value"> {
  label?: FieldProps["label"];
  type?: "text" | "email" | "password";
  error?: FieldProps["error"];
  inputRef?: React.Ref<HTMLInputElement>;
  value: string[];
  onChange: (value: string[]) => void;
  onAdd: (value: string) => void;
  name: FieldProps["name"];
  maxTagsToShow?: number;
}

export function TagsField({
  label,
  error,
  name,
  inputRef,
  onChange,
  onAdd,
  disabled,
  readOnly,
  value,
  maxTagsToShow,
  ...rest
}: TagsFieldProps) {
  const handleAdd = (tag: string) => {
    onAdd(tag);
    onChange([...value, tag]);
  };

  const handleDelete = (deletedTag: string) => {
    onChange(value.filter((tag) => tag !== deletedTag));
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      (event.target as HTMLInputElement).value !== ""
    ) {
      handleAdd(event.currentTarget.value);
    }
  };
  return (
    <Field error={error} label={label} name={name}>
      {!disabled && !readOnly && (
        <Input<string>
          ref={inputRef}
          name={name}
          className="bg-white px-2 py-1"
          onKeyDown={handleKeyDown}
          {...rest}
        />
      )}
      <Tags
        tags={value}
        onClose={handleDelete}
        closable={!disabled && !readOnly}
        maxTagsToShow={maxTagsToShow}
        className="bg-white px-2 py-1"
      />
    </Field>
  );
}
