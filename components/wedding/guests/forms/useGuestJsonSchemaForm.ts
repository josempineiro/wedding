import { CreateGuestParams } from "@/domain/wedding/entities/Guest";
import {
  FormSchema,
  FormValidateOptions,
} from "@/domain/core/forms/FormSchema";

export function useGuestJsonSchema(includedFields: string[]) {
  return {
    id: "guest",
    name: "Guest",
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
        placeholder: "First name",
        required: true,
        autoFocus: true,
      },
      {
        name: "email",
        label: "Email",
        placeholder: "name@example.com",
        type: "email",
        required: true,
        validate: (
          value: string,
          options: FormValidateOptions<CreateGuestParams>
        ) => options.validators.email(value),
      },
      {
        name: "birthday",
        label: "Birthday",
        placeholder: "dd/mm/yyyy",
        type: "date",
        required: true,
        validate: (
          value: Date,
          options: FormValidateOptions<CreateGuestParams>
        ) => options.validators.isDateBeforeNow(value),
      },
      {
        name: "tags",
        label: "Tags",
        placeholder: "Write a tag",
        type: "tags",
        validate: (
          value: string,
          options: FormValidateOptions<CreateGuestParams>
        ) => options.validators.required(value),
      },
    ].filter((field) => includedFields.includes(field.name)),
  } as FormSchema<CreateGuestParams>;
}
