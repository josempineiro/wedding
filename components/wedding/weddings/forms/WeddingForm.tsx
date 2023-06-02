import { forwardRef } from "react";
import {
  JsonForm,
  type JsonFormProps,
} from "@/components/core/forms/json-form/JsonForm";
import {
  Wedding,
  CreateWeddingParams,
} from "@/domain/wedding/entities/Wedding";
import { useWeddingJsonSchema } from "./useWeddingJsonSchemaForm";

export interface WeddingFormProps
  extends Omit<
    JsonFormProps<CreateWeddingParams>,
    "schema" | "onSubmit" | "defaultValues"
  > {
  editableFields?: string[];
  onSubmit: (wedding: Wedding) => void;
  wedding: Wedding;
}

function WeddingForm(
  {
    editableFields = ["name", "datetime"],
    wedding,
    onSubmit,
    ...rest
  }: WeddingFormProps,
  ref?: React.ForwardedRef<HTMLFormElement>
) {
  const weddingJsonSchema = useWeddingJsonSchema(editableFields);
  const handleSubmit = (values: CreateWeddingParams) => {
    onSubmit(Wedding.create(values));
  };
  return (
    <JsonForm<CreateWeddingParams>
      ref={ref}
      onSubmit={handleSubmit}
      schema={weddingJsonSchema}
      defaultValues={wedding as CreateWeddingParams}
      {...rest}
    />
  );
}

const ForwardedWeddingForm = forwardRef(WeddingForm);

export { ForwardedWeddingForm as WeddingForm };
