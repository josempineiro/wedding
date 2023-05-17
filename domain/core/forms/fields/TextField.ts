import { Field } from "./Field";

export interface TextField extends Field<string> {
  type: "text";
  placeholder?: string;
}
