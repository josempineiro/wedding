import { Field } from "./Field";

export interface DateField extends Omit<Field<Date>, "type"> {
  type: "date";
  placeholder?: string;
}
