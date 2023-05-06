import { useState } from "react";
import { Guest } from "@/domain/wedding/entities/Guest";
import { DeleteGuestButton } from "@/components/wedding/guests/DeleteGuestButton";
import { UpdateGuestButton } from "@/components/wedding/guests/UpdateGuestButton";
import { Button } from "@/components/core/buttons/Button";

export function GuestsListItem({ guest }: { guest: Guest }) {
  const [editionMode, setEditionMode] = useState<boolean>(false);
  const handleUpdate = () => {
    console.log("update guest", guest);
    if (editionMode === false) {
      setEditionMode(true);
    } else {
      setEditionMode(false);
    }
  };
  return (
    <li key={guest.id}>
      {editionMode ? (
        <form>
          <input
            type="text"
            name="name"
            defaultValue={guest.name}
            onChange={(event) => {
              guest.set({
                name: event.target.value,
              });
            }}
          />
          <input
            type="email"
            name="email"
            defaultValue={guest.email}
            onChange={(event) => {
              guest.set({
                email: event.target.value,
              });
            }}
          />
          <UpdateGuestButton guest={guest} onClick={handleUpdate}>
            {"Save"}
          </UpdateGuestButton>
        </form>
      ) : (
        <>
          {guest.name} - {guest.email}
          <DeleteGuestButton guest={guest} />
          <Button onClick={handleUpdate}>Update</Button>
        </>
      )}
    </li>
  );
}
