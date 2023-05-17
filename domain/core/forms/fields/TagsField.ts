import { Field } from "./Field";

export interface TagsField extends Field<Array<string>> {
  type: "tags";
  placeholder?: string;
}
