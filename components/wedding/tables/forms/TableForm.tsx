import { forwardRef } from "react";
import {
  JsonForm,
  type JsonFormProps,
} from "@/components/core/forms/json-form/JsonForm";
import { Table, CreateTableParams } from "@/domain/wedding/entities/Table";
import { useTableJsonSchemaForm } from "./useTableJsonSchemaForm";

export interface TableFormProps
  extends Omit<
    JsonFormProps<CreateTableParams>,
    "schema" | "onSubmit" | "defaultValues"
  > {
  editableFields?: string[];
  onSubmit: (table: Table) => void;
  table: Table;
}

function TableForm(
  {
    editableFields = ["id", "name", "email", "tags", "birthday"],
    table,
    onSubmit,
    ...rest
  }: TableFormProps,
  ref?: React.ForwardedRef<HTMLFormElement>
) {
  const tableJsonSchema = useTableJsonSchemaForm(editableFields);
  const handleSubmit = (values: CreateTableParams) => {
    onSubmit(Table.create(values));
  };
  return (
    <JsonForm<CreateTableParams>
      ref={ref}
      onSubmit={handleSubmit}
      schema={tableJsonSchema}
      defaultValues={table as CreateTableParams}
      {...rest}
    />
  );
}

const ForwardedTableForm = forwardRef(TableForm);

export { ForwardedTableForm as TableForm };
