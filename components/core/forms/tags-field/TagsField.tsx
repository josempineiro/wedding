import { useState } from "react";
import { FieldType } from "@/domain/core/forms/fields/Field";
import { Tags } from "@/components/core/forms/tags-field/Tags";
import { Field, type FieldProps } from "@/components/core/forms/field/Field";
import { Input, type InputProps } from "@/components/core/forms/input/Input";

type TagsType = FieldType & Array<string>;
export interface TagsFieldProps
  extends Omit<InputProps<string>, "onChange" | "value"> {
  label?: FieldProps<string[]>["label"];
  type?: "text" | "email" | "password";
  errors?: FieldProps<string[]>["errors"];
  inputRef?: React.Ref<HTMLInputElement>;
  value: string[];
  onChange?: (value: string[]) => void;
  onAdd?: (value: string) => void;
  name: FieldProps<string[]>["name"];
  maxTagsToShow?: number;
}

export function TagsField({
  label,
  errors,
  name,
  inputRef,
  onChange = () => {},
  onAdd = () => {},
  disabled,
  readOnly,
  value,
  maxTagsToShow,
  ...rest
}: TagsFieldProps) {
  const [tagInputValue, setTagInputValue] = useState<string>("");
  const handleAdd = (tag: string) => {
    onAdd(tag);
    onChange([...value, tag]);
    setTagInputValue("");
  };

  const handleDelete = (deletedTag: string) => {
    onChange(value.filter((tag) => tag !== deletedTag));
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      (event.target as HTMLInputElement).value !== ""
    ) {
      event.preventDefault();
      handleAdd(event.currentTarget.value);
    }
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if ((event.target as HTMLInputElement).value !== "") {
      event.preventDefault();
      handleAdd(event.currentTarget.value);
    }
  };
  return (
    <Field type="tags" errors={errors} label={label} name={name}>
      <div className="flex bg-white">
        {value.length > 0 && (
          <Tags
            tags={value}
            onClose={handleDelete}
            closable={!disabled && !readOnly}
            maxTagsToShow={maxTagsToShow}
            className="bg-white px-2"
          />
        )}
        {!disabled && !readOnly && (
          <Input<string>
            ref={inputRef}
            name={name}
            value={tagInputValue}
            className="bg-white px-2 py-1"
            onKeyDown={handleKeyDown}
            onChange={setTagInputValue}
            onBlur={handleBlur}
            {...rest}
          />
        )}
      </div>
    </Field>
  );
}
