import { useState } from "react";
import { Guest } from "@/domain/wedding/entities/Guest";
import { DeleteGuestButton } from "@/components/wedding/guests/DeleteGuestButton";
import { UpdateGuestButton } from "@/components/wedding/guests/UpdateGuestButton";
import { Button } from "@/components/core/buttons/Button";
import { Input } from "@/components/core/forms/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus, faPen } from "@fortawesome/free-solid-svg-icons";

export function GuestsListItem({ guest }: { guest: Guest }) {
  const [editedGuest, setEditedGuest] = useState<Guest | undefined>(undefined);
  const handleUpdate = () => {
    setEditedGuest(guest.clone<Guest>());
  };
  const handleDiscard = () => {
    setEditedGuest(undefined);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <li className="p-2" key={guest.id}>
      {editedGuest ? (
        <form className="flex flex-row w-full justify-between gap-4">
          <Input<string>
            type="text"
            name="name"
            defaultValue={guest.name}
            onChange={(name) => {
              setEditedGuest(editedGuest.set<Guest>({ name }));
            }}
          />
          <Input<string>
            type="email"
            name="email"
            defaultValue={guest.email}
            onChange={(email) => {
              setEditedGuest(editedGuest.set<Guest>({ email }));
            }}
          />
          <Button type="button" onClick={handleDiscard}>
            Discard
          </Button>
          <UpdateGuestButton guest={editedGuest} onClick={handleUpdate}>
            {"Save"}
          </UpdateGuestButton>
        </form>
      ) : (
        <div className="flex flex-row gap-4">
          <div className="flex-1 flex justify-between">
            <span>{guest.name}</span>
            <span className="opacity-20">{guest.email}</span>
          </div>
          <DeleteGuestButton guest={guest}>
            <FontAwesomeIcon icon={faUserMinus} />
          </DeleteGuestButton>
          <Button onClick={handleUpdate}>
            <FontAwesomeIcon icon={faPen} />
          </Button>
        </div>
      )}
    </li>
  );
}
