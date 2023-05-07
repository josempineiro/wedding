import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FAButton } from "@/components/core/buttons/FAButton";
import { Modal } from "@/components/core/content/modal/Modal";
import GuestCreationForm from "@/components/wedding/guests/GuestCreationForm";

export function CreateGuestFAButton() {
  const [visible, setVisible] = useState(false);
  const handleCreate = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <>
      <FAButton onClick={handleCreate}>
        <FontAwesomeIcon icon={faUserPlus} />
      </FAButton>
      <Modal visible={visible} onClose={handleClose}>
        <GuestCreationForm />
      </Modal>
    </>
  );
}
