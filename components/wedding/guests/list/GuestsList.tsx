import { List } from "@/components/core/content/list/List";
import { ListProvider } from "@/components/core/content/list/ListProvider";
import { Guest, GuestId } from "@/domain/wedding/entities/Guest";
import { GuestsListItem } from "@/components/wedding/guests/list/GuestsListItem";
import { GuestsListBar } from "@/components/wedding/guests/list/GuestsListBar";
import { useCallback } from "react";

export default function GuestsList({ guests }: { guests: Array<Guest> }) {
  const getItemId = useCallback((item: Guest) => item.id, []);
  return (
    <ListProvider<Guest, GuestId>
      getItemId={getItemId}
      data={guests}
      selectable
    >
      <List>
        {guests.map((guest) => (
          <GuestsListItem key={guest.id} guest={guest} />
        ))}
      </List>
      <GuestsListBar guests={guests} />
    </ListProvider>
  );
}
