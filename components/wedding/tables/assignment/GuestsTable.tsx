import { Guest } from "@/domain/wedding/entities/Guest";
import { Table } from "@/domain/wedding/entities/Table";
import { useWindowSize } from "@/hooks/core/dom/useWindowSize";
import { motion, AnimatePresence } from "framer-motion";

export function GuestsTable({
  table,
  onDragGuest,
  onDragGuestEnterGuest,
  onDropGuestOverGuest,
}: {
  table: Table;
  onDragGuest: (guest: Guest) => void;
  onDragGuestEnterGuest: (
    event: React.DragEvent<HTMLLIElement>,
    guest: Guest
  ) => void;
  onDropGuestOverGuest: (
    event: React.DragEvent<HTMLLIElement>,
    guest: Guest
  ) => void;
}): JSX.Element {
  const { width, height } = useWindowSize();
  return (
    <div className="relative w-16 h-16 md:h-32 md:w-32 aspect-square bg-red-400 flex items-center justify-center">
      <ul className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-orange-400 rounded-full">
        <AnimatePresence>
          {table.guests.map((guest, index) => {
            const angle =
              index * ((2 * Math.PI) / Math.max(table.guests.length, 6));
            const radius = width < 768 ? 32 : 64;
            const chairRadius = width < 768 ? 48 : 96;

            return (
              <motion.li
                key={guest.id}
                className="absolute h-6 w-6 bg-blue-400 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 flex items-center justify-center"
                draggable
                onDragStart={() => onDragGuest(guest)}
                onDragOver={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
                onDragEnter={(event) => onDragGuestEnterGuest(event, guest)}
                onDrop={(event) => onDropGuestOverGuest(event, guest)}
                style={{
                  top: `${radius + chairRadius * Math.cos(angle)}px`,
                  left: `${radius + chairRadius * Math.sin(angle)}px`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="absolute inset select-none text-xs scale-75 bg-blue-400 rounded-md px-1 py-0.5">
                  {guest.name}
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
      <label className="absolute inset">{table.name}</label>
    </div>
  );
}
