import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FAButton } from "@/components/core/buttons/FAButton";
import { Modal, useModal } from "@/components/core/content/modal/Modal";
import { GuestCreationForm } from "@/components/wedding/guests/forms/GuestCreationForm";

export function CreateGuestFAButton() {
  const modal = useModal();
  return (
    <>
      <FAButton onClick={modal.open}>
        <FontAwesomeIcon icon={faUserPlus} />
      </FAButton>
      <Modal visible={modal.visible} onClose={modal.close}>
        <GuestCreationForm />
      </Modal>
    </>
  );
}
