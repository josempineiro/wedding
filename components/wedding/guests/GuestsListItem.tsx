import { useState } from "react";
import { ListItem } from "@/components/core/content/list/ListItem";
import { Guest, GuestId } from "@/domain/wedding/entities/Guest";
import { DeleteGuestButton } from "@/components/wedding/guests/DeleteGuestButton";
import { UpdateGuestButton } from "@/components/wedding/guests/UpdateGuestButton";
import { Button } from "@/components/core/buttons/Button";
import { Input } from "@/components/core/forms/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus, faPen } from "@fortawesome/free-solid-svg-icons";
import {
  useList,
  useListItem,
} from "@/components/core/content/list/ListProvider";

export function GuestsListItem({ guest }: { guest: Guest }) {
  const [editedGuest, setEditedGuest] = useState<Guest | undefined>(undefined);
  const listItem = useListItem<Guest, GuestId>(guest);
  const list = useList<Guest, GuestId>();
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
    <ListItem className="p-2 flex gap-2 group" key={guest.id} item={guest}>
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
        <div className="flex flex-row gap-4 w-full">
          <div className="flex-1 flex justify-between">
            <span>{guest.name}</span>
            <span className="opacity-20">{guest.email}</span>
          </div>
          <span className="opacity-0 group-hover:opacity-100">
            {guest.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-200 rounded">
                {tag}
              </span>
            ))}
          </span>
          {list.selection.selectedIds.length === 0 && (
            <>
              <DeleteGuestButton guest={guest}>
                <FontAwesomeIcon icon={faUserMinus} />
              </DeleteGuestButton>
              <Button onClick={handleUpdate}>
                <FontAwesomeIcon icon={faPen} />
              </Button>
            </>
          )}
          a
        </div>
      )}
    </ListItem>
  );
}
