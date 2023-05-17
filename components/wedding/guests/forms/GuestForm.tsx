import { forwardRef } from "react";
import {
  JsonForm,
  type JsonFormProps,
} from "@/components/core/forms/json-form/JsonForm";
import { Guest, CreateGuestParams } from "@/domain/wedding/entities/Guest";
import useGuestJsonSchema from "./useGuestJsonSchemaForm";

export interface GuestFormProps
  extends Omit<
    JsonFormProps<CreateGuestParams>,
    "schema" | "onSubmit" | "defaultValues"
  > {
  editableFields?: string[];
  onSubmit: (guest: Guest) => void;
  guest: Guest;
}

function GuestForm(
  {
    editableFields = ["id", "name", "email", "tags", "birthday"],
    guest,
    onSubmit,
    ...rest
  }: GuestFormProps,
  ref?: React.ForwardedRef<HTMLFormElement>
) {
  const guestJsonSchema = useGuestJsonSchema(editableFields);
  const handleSubmit = (values: CreateGuestParams) => {
    onSubmit(Guest.create(values));
  };
  return (
    <JsonForm<CreateGuestParams>
      ref={ref}
      onSubmit={handleSubmit}
      schema={guestJsonSchema}
      defaultValues={guest as CreateGuestParams}
      {...rest}
    />
  );
}

const ForwardedGuestForm = forwardRef(GuestForm);

export { ForwardedGuestForm as GuestForm };
