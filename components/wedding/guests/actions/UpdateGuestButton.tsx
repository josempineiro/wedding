import { Guest } from "@/domain/wedding/entities/Guest";
import { Button, type ButtonProps } from "@/components/core/buttons/Button";
import { Modal, useModal } from "@/components/core/content/modal/Modal";
import { GuestUpdateForm } from "@/components/wedding/guests/forms/GuestUpdateForm";

interface Props extends ButtonProps {
  guest: Guest;
}

export const UpdateGuestButton = ({
  guest,
  onClick,
  children,
  ...rest
}: Props) => {
  const modal = useModal();
  return (
    <>
      <Button type="button" onClick={modal.open} {...rest}>
        {children}
      </Button>
      <Modal visible={modal.visible} closable onClose={modal.close}>
        <GuestUpdateForm onSuccess={modal.close} guest={guest} />
      </Modal>
    </>
  );
};
