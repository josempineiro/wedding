import { useRef } from "react";
import { Guest } from "@/domain/wedding/entities/Guest";
import { useUpdateGuest } from "@/hooks/wedding/use-cases/useUpdateGuest";
import { Button } from "@/components/core/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import {
  GuestForm,
  type GuestFormProps,
} from "@/components/wedding/guests/forms/GuestForm";

interface GuestUpdateFormProps
  extends Omit<GuestFormProps, "onSubmit" | "defaultValues"> {
  onSuccess: () => void;
  guest: Guest;
}

export function GuestUpdateForm({
  onSuccess = () => {},
  guest,
  ...rest
}: GuestUpdateFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const { mutate: updateGuest, isLoading } = useUpdateGuest({
    onSuccess: () => {
      if (formRef.current) {
        formRef.current.reset();
      }
      onSuccess();
    },
  });

  const handleSubmit = async (guest: Guest) => {
    updateGuest(guest);
  };
  return (
    <GuestForm onSubmit={handleSubmit} guest={guest} ref={formRef} {...rest}>
      <Button disabled={isLoading} type="submit" variant="primary">
        <span>Update</span>
        <FontAwesomeIcon icon={faFloppyDisk} />
      </Button>
    </GuestForm>
  );
}
