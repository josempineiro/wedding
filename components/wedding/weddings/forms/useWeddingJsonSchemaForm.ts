import { CreateWeddingParams } from "@/domain/wedding/entities/Wedding";
import {
  FormSchema,
  FormValidateOptions,
} from "@/domain/core/forms/FormSchema";

export function useWeddingJsonSchema(includedFields: string[]) {
  return {
    id: "wedding",
    name: "Wedding",
    fields: [
      {
        name: "id",
        label: "Id",
        type: "hidden",
        placeholder: "Id",
        required: true,
      },
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Choose a name for your special Day",
        required: true,
        autoFocus: true,
      },
      {
        name: "datetime",
        label: "Date and time",
        placeholder: "dd/mm/yyyy hh:mm",
        type: "date",
        required: true,
        validate: (
          value: Date,
          options: FormValidateOptions<CreateWeddingParams>
        ) => options.validators.isDateAfterNow(value),
      },
    ].filter((field) => includedFields.includes(field.name)),
  } as FormSchema<CreateWeddingParams>;
}
