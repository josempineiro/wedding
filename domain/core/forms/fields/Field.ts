export type FieldTypes =
  | "text"
  | "email"
  | "password"
  | "date"
  | "number"
  | "textarea"
  | "select"
  | "tags";

export type FieldType =
  | string
  | string[]
  | number
  | boolean
  | Date
  | unknown
  | unknown[];

export interface Field<TValue extends FieldType> {
  name: string;
  label?: string;
  type: FieldTypes;
  defaultValue?: TValue;
  value?: TValue;
  required?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
}
