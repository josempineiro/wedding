import { CreateTableParams } from "@/domain/wedding/entities/Table";
import {
  FormSchema,
  FormValidateOptions,
} from "@/domain/core/forms/FormSchema";

export function useTableJsonSchemaForm(includedFields: string[]) {
  return {
    id: "table",
    name: "Table",
    fields: [
      {
        name: "id",
        label: "Id",
        type: "text",
        placeholder: "Id",
        required: true,
      },
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Write a table name",
        required: true,
        autoFocus: true,
      },
    ].filter((field) => includedFields.includes(field.name)),
  } as FormSchema<CreateTableParams>;
}
