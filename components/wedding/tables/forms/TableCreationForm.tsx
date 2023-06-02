import { useRef } from "react";
import { Table } from "@/domain/wedding/entities/Table";
import { useCreateTable } from "@/hooks/wedding/use-cases/useCreateTable";
import { Button } from "@/components/core/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TableForm } from "@/components/wedding/tables/forms/TableForm";

export function TableCreationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [addTable, { loading }] = useCreateTable({
    onCompleted: () => {
      if (formRef.current) {
        formRef.current.reset();
      }
    },
  });

  const handleSubmit = async (table: Table) => {
    addTable(table);
  };

  return (
    <TableForm
      onSubmit={handleSubmit}
      ref={formRef}
      editableFields={["name"]}
      table={Table.create({
        name: "",
      })}
    >
      <Button disabled={loading} type="submit" variant="primary">
        <span>Add</span>
        <FontAwesomeIcon className="h-4 w-4" icon={faPlus} />
      </Button>
    </TableForm>
  );
}
