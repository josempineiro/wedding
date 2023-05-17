import { useRef } from "react";
import { Guest } from "@/domain/wedding/entities/Guest";
import { useAddGuest } from "@/hooks/wedding/use-cases/useAddGuest";
import { Button } from "@/components/core/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FormValues } from "@/domain/core/forms/FormSchema";
import { GuestForm } from "@/components/wedding/guests/forms/GuestForm";

export function GuestCreationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { mutate: addGuest, isLoading } = useAddGuest({
    onSuccess: () => {
      if (formRef.current) {
        formRef.current.reset();
      }
    },
  });

  const handleSubmit = async (values: FormValues) => {
    addGuest(
      Guest.create({
        name: values.name as string,
        email: values.email as string,
        weddingId: "95f2e638-0023-4316-8868-6550f9bf1db3",
      })
    );
  };

  return (
    <GuestForm onSubmit={handleSubmit} ref={formRef} editableFields={["name"]}>
      <Button disabled={isLoading} type="submit" variant="primary">
        <span>Add</span>
        <FontAwesomeIcon icon={faUserPlus} />
      </Button>
    </GuestForm>
  );
}
