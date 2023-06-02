import { useState } from "react";
import { ListItem } from "@/components/core/content/list/ListItem";
import { Guest, GuestId } from "@/domain/wedding/entities/Guest";
import { DeleteGuestButton } from "@/components/wedding/guests/actions/DeleteGuestButton";
import { UpdateGuestButton } from "@/components/wedding/guests/actions/UpdateGuestButton";
import { Button } from "@/components/core/buttons/Button";
import { Input } from "@/components/core/forms/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMinus,
  faXmark,
  faCheck,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import {
  useList,
  useListItem,
} from "@/components/core/content/list/ListProvider";
import { Tags } from "@/components/core/forms/tags-field/Tags";
import { Form } from "@/components/core/forms/form/Form";

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

  return (
    <ListItem className="p-2 flex gap-2 group" key={guest.id} item={guest}>
      {editedGuest ? (
        <Form>
          <Input<string>
            type="text"
            name="name"
            defaultValue={guest.name}
            onChange={(name) => {
              setEditedGuest(editedGuest.set<Guest>({ name }));
            }}
            onBlur={handleUpdate}
          />
          <Input<string>
            type="email"
            name="email"
            defaultValue={guest.email}
            onChange={(email) => {
              setEditedGuest(editedGuest.set<Guest>({ email }));
            }}
            onBlur={handleUpdate}
          />
          <Button size="sm" rounded type="button" onClick={handleDiscard}>
            <FontAwesomeIcon className="h-4 w-4" icon={faXmark} />
          </Button>
          <UpdateGuestButton rounded size="sm" guest={editedGuest}>
            <FontAwesomeIcon className="h-4 w-4" icon={faCheck} />
          </UpdateGuestButton>
        </Form>
      ) : (
        <div className="flex flex-row gap-4 w-full">
          <div className="flex-1 flex items-center justify-between">
            <span>{guest.name}</span>
            <span className="opacity-20">{guest.email}</span>

            <Tags tags={guest.tags} maxTagsToShow={1} />
          </div>
          {list.selection.selectedIds.length === 0 && (
            <>
              <DeleteGuestButton size="sm" rounded guest={guest}>
                <FontAwesomeIcon className="h-4 w-4" icon={faUserMinus} />
              </DeleteGuestButton>
              <UpdateGuestButton size="sm" rounded guest={guest}>
                <FontAwesomeIcon className="h-4 w-4" icon={faPen} />
              </UpdateGuestButton>
            </>
          )}
        </div>
      )}
    </ListItem>
  );
}
