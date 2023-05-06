import { Database } from "@/supabase/types";
import { Guest } from "@/domain/wedding/entities/Guest";

export default function GuestsList({ guests }: { guests: Array<Guest> }) {
  return (
    <ul>
      {guests.map((guest) => (
        <li key={guest.id}>
          {guest.name} - {guest.email}
        </li>
      ))}
    </ul>
  );
}
