import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FAButton } from "@/components/core/buttons/FAButton";
import { Modal, useModal } from "@/components/core/content/modal/Modal";
import { TableCreationForm } from "@/components/wedding/tables/forms/TableCreationForm";

export function CreateTableFAButton() {
  const modal = useModal();
  return (
    <>
      <FAButton onClick={modal.open}>
        <FontAwesomeIcon className="h-4 w-4" icon={faPlus} />
      </FAButton>
      <Modal visible={modal.visible} closable onClose={modal.close}>
        <TableCreationForm />
      </Modal>
    </>
  );
}
