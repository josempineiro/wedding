import { Database } from "@/supabase/types";
import { Guest } from "@/domain/wedding/entities/Guest";
import { GuestsListItem } from "@/components/wedding/guests/GuestsListItem";

export default function GuestsList({ guests }: { guests: Array<Guest> }) {
  return (
    <ul className="w-full">
      {guests.map((guest) => (
        <GuestsListItem key={guest.id} guest={guest} />
      ))}
    </ul>
  );
}
