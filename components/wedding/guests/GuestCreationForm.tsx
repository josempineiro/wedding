import { useRef } from "react";
import { Guest } from "@/domain/wedding/entities/Guest";
import { useAddGuest } from "@/hooks/wedding/use-cases/useAddGuest";
import { TextField } from "@/components/core/forms/TextField";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function GuestCreationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const { mutate: addGuest, isLoading } = useAddGuest({
    onSuccess: () => {
      if (formRef.current) {
        formRef.current.reset();
      }
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    addGuest(
      Guest.create({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        weddingId: "95f2e638-0023-4316-8868-6550f9bf1db3",
      })
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="flex flex-row w-full justify-between gap-4 p-2"
    >
      <div className="flex-1 flex justify-between">
        <TextField
          label="Name"
          type="text"
          name="name"
          placeholder="Write a name"
          required
          autoFocus
          inputRef={nameInputRef}
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="Write an email"
          className="text-right"
        />
      </div>
      <button disabled={isLoading} type="submit">
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
    </form>
  );
}

export default GuestCreationForm;
