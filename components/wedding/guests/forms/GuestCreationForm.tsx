import { useRef } from "react";
import { Guest } from "@/domain/wedding/entities/Guest";
import { useAddGuest } from "@/hooks/wedding/use-cases/useAddGuest";
import { Button } from "@/components/core/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { GuestForm } from "@/components/wedding/guests/forms/GuestForm";
import { useWeddingContext } from "@/components/wedding/weddings/WeddingProvider";

export function GuestCreationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { wedding } = useWeddingContext();
  const [addGuest, { loading }] = useAddGuest({
    onCompleted: () => {
      if (formRef.current) {
        formRef.current.reset();
      }
    },
  });

  const handleSubmit = async (guest: Guest) => {
    addGuest(guest);
  };

  return (
    <GuestForm
      onSubmit={handleSubmit}
      ref={formRef}
      editableFields={["name"]}
      guest={Guest.create({
        name: "",
        weddingId: wedding.id,
      })}
    >
      <Button disabled={loading} type="submit" variant="primary">
        <span>Add</span>
        <FontAwesomeIcon className="h-4 w-4" icon={faUserPlus} />
      </Button>
    </GuestForm>
  );
}
