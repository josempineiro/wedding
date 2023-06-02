import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Guest } from "@/domain/wedding/entities/Guest";
import { Table } from "@/domain/wedding/entities/Table";
import { useUpdateGuest } from "@/hooks/wedding/use-cases/useUpdateGuest";
import { useUpdateTable } from "@/hooks/wedding/use-cases/useUpdateTable";
import { useWindowSize } from "@/hooks/core/dom/useWindowSize";
import { useTables } from "@/hooks/wedding/use-cases/useTables";
import { useGuests } from "@/hooks/wedding/use-cases/useGuests";
import { useWeddingMappers } from "@/hooks/wedding/mappers/useWeddingMappers";
import {
  TableConnection,
  GuestConnection,
} from "@/infrastructure/graphql/apollo";

interface Movement<TFrom, TTo = TFrom> {
  from: TFrom;
  to: TTo;
}

interface GuestMovement
  extends Movement<Guest, Guest | Table | undefined | null> {}

interface GuestToGuestMovement extends Movement<Guest, Guest> {}

interface GuestToTableMovement extends Movement<Guest, Table> {}

interface TablesAssignmentsState {
  tables: Array<Table>;
  guests: Array<Guest>;
}

class TablesAssignment {
  public static create({
    tables,
    guests,
  }: {
    tables: Array<Table>;
    guests: Array<Guest>;
  }) {
    return new TablesAssignment(tables, guests);
  }

  constructor(public tables: Array<Table>, public guests: Array<Guest>) {}

  public getUnassignedGuests() {
    return this.guests.filter((guest) => !guest.hasTable());
  }

  private moveGuestToUnassigned(movedGuest: Guest) {
    movedGuest.table?.removeGuest(movedGuest);
    return TablesAssignment.create({
      tables: this.tables.map((table) => {
        if (table.equals(movedGuest.table)) {
          const newTable = table.clone<Table>();
          newTable.removeGuest(movedGuest);
          return newTable;
        }
        return table;
      }),
      guests: this.guests.map((guest) => {
        if (guest.equals(movedGuest)) {
          const guestWithoutTable = movedGuest.clone<Guest>();
          guestWithoutTable.unassignFromTable();
          return guestWithoutTable;
        }
        return guest;
      }),
    });
  }

  public moveGuestToTable(movement: GuestToTableMovement) {
    return TablesAssignment.create({
      tables: this.tables.map((table) => {
        if (table.equals(movement.from.table) && table.equals(movement.to)) {
          return table;
        }
        if (table.equals(movement.from.table) && !table.equals(movement.to)) {
          const newTable = table.clone<Table>();
          newTable.removeGuest(movement.from);
          return newTable;
        }
        if (table.equals(movement.to)) {
          const newTable = table.clone<Table>();
          newTable.addGuest(movement.from);
          return newTable;
        }
        return table;
      }),
      guests: this.guests.map((guest) => {
        if (guest.equals(movement.from)) {
          const guestWithTable = movement.from.clone<Guest>();
          guestWithTable.assignToTable(movement.to);
          return guestWithTable;
        }
        return guest;
      }),
    });
  }

  private moveGuestToGuest(movement: GuestToGuestMovement) {
    return TablesAssignment.create({
      tables: this.tables.map((table) => {
        if (
          table.equals(movement.from.table) ||
          table.equals(movement.to.table)
        ) {
          const newTable = table.clone<Table>();
          if (
            table.equals(movement.from.table) &&
            table.equals(movement.to.table)
          ) {
            const draggedGuestIndex = table.guests.findIndex((guest) =>
              guest.equals(movement.from)
            );
            const droppedGuestGuestIndex = table.guests.findIndex((guest) =>
              guest.equals(movement.to)
            );
            const tableGuestWithoutDraggedGuestIds = table.guests
              .map((guest) => guest.id)
              .filter((id) => id !== movement.from.id);

            const sortedIds = [
              ...tableGuestWithoutDraggedGuestIds.slice(
                0,
                tableGuestWithoutDraggedGuestIds.indexOf(movement.to.id)
              ),
              ...(draggedGuestIndex < droppedGuestGuestIndex
                ? [movement.to.id, movement.from.id]
                : [movement.from.id, movement.to.id]),
              ...tableGuestWithoutDraggedGuestIds.slice(
                tableGuestWithoutDraggedGuestIds.indexOf(movement.to.id) + 1
              ),
            ];
            newTable.sortGuests(sortedIds);
          }
          if (
            table.equals(movement.from.table) &&
            !table.equals(movement.to.table)
          ) {
            newTable.removeGuest(movement.from);
          }
          newTable.removeGuest(movement.from);
          return newTable;
        }
        if (table.equals(table)) {
          const newTable = table.clone<Table>();
          newTable.addGuest(movement.from);
          return newTable;
        }
        return table;
      }),
      guests: this.guests.map((guest) => {
        if (guest.equals(movement.from)) {
          const guestWithTable = movement.from.clone<Guest>();
          if (movement.to.table) {
            guestWithTable.assignToTable(movement.to.table);
          } else {
            guestWithTable.unassignFromTable();
          }
          return guestWithTable;
        }
        return guest;
      }),
    });
  }

  public moveGuest(movement: GuestMovement) {
    if (movement.to instanceof Guest) {
      return this.moveGuestToGuest(movement as GuestToGuestMovement);
    }
    if (movement.to instanceof Table) {
      return this.moveGuestToTable(movement as GuestToTableMovement);
    }

    if (movement.to === null) {
      return this.moveGuestToUnassigned(movement.from);
    }
    return this;
  }
}

export const TablesAssignmentEditor = ({}) => {
  const [tablesAssignments, setTablesAssignments] = useState<TablesAssignment>(
    TablesAssignment.create({ tables: [], guests: [] })
  );

  const { tableCollectionMapper, guestCollectionMapper } = useWeddingMappers();

  const { loading: tablesAreLoading } = useTables({
    onCompleted: (data) => {
      if (data.tableCollection) {
        setTablesAssignments((tablesAssignments) =>
          TablesAssignment.create({
            tables: tableCollectionMapper.map(
              data.tableCollection as TableConnection
            ),
            guests: tablesAssignments.guests,
          })
        );
      }
    },
  });

  const { loading: guestsAreLoading } = useGuests({
    onCompleted: (data) => {
      if (data.guestCollection) {
        setTablesAssignments((tablesAssignments) =>
          TablesAssignment.create({
            tables: tablesAssignments.tables,
            guests: guestCollectionMapper.map(
              data.guestCollection as GuestConnection
            ),
          })
        );
      }
    },
  });

  const [movement, setMovement] = useState<GuestMovement | undefined>();

  useEffect(() => {
    if (movement) {
      console.log("movement", movement);
      setTablesAssignments((tablesAssignments) =>
        tablesAssignments.moveGuest(movement)
      );
    }
  }, [movement]);

  useEffect(() => {
    if (tablesAssignments) {
      debugger;
    }
  }, [tablesAssignments]);

  const [updateGuest, { loading: updatingGuest }] = useUpdateGuest();
  const [updateTable, { loading: updatingTable }] = useUpdateTable();

  const { width, height } = useWindowSize();

  const handleGuestDragStart = (guest: Guest) => {
    setMovement({
      from: guest,
      to: undefined,
    });
  };

  const handleDragEnterTable = async (
    table: Table,
    event: React.DragEvent<HTMLDivElement>
  ) => {
    console.log("drag enter on table");
    event.preventDefault();
    event.stopPropagation();
    if (
      !updatingGuest &&
      !updatingTable &&
      movement &&
      (!movement.from.hasTable() || !table.equals(movement.from.table))
    ) {
      setMovement({
        ...movement,
        to: table,
      });
    }
  };

  const handleOverOutside = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragEnterOutside = async (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    console.log("drag enter outside");
    event.preventDefault();
    if (!updatingGuest && !updatingTable && movement && movement.from.table) {
      setMovement({
        ...movement,
        to: undefined,
      });
    }
  };

  const handleDragGuestEnterGuest = (
    event: React.DragEvent<HTMLLIElement>,
    overGuest: Guest
  ) => {
    event.preventDefault();
    event.stopPropagation();
    if (!updatingGuest && !updatingTable && movement) {
      setMovement({
        ...movement,
        to: overGuest,
      });
    }
  };

  const handleDropGuestOverGuest = (
    event: React.DragEvent<HTMLLIElement>,
    overGuest: Guest,
    table: Table
  ) => {
    event.preventDefault();
    event.stopPropagation();
    if (movement) {
      setMovement(undefined);
    }
  };

  const handleDropOnTable = (
    table: Table,
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    if (!updatingGuest && !updatingTable && movement) {
      if (movement) {
        setMovement(undefined);
        // updateGuest(reassignedGuest);
      }
    }
  };

  const handleDropOutside = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (movement && !updatingGuest && !updatingTable) {
      // updateGuest(unassignedGuest);
      setMovement(undefined);
    }
  };

  return (
    <div
      onDrop={handleDropOutside}
      onDragOver={handleOverOutside}
      onDragEnter={(event) => handleDragEnterOutside(event)}
    >
      <h1>TablesAssignment</h1>
      <div className="grid grid-cols-12 gap-2">
        {tablesAssignments.getUnassignedGuests().map((guest) => (
          <div
            key={guest.id}
            draggable
            onDragStart={() => handleGuestDragStart(guest)}
            className="aspect-square bg-blue-400 flex items-center justify-center whitespace-pre"
          >
            <span>{guest.name}</span>
          </div>
        ))}
        <div className="aspect-square bg-gray-700 flex items-center justify-center whitespace-pre">
          <p>drop here</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-12 p-4 md:p-2">
        {tablesAssignments.tables.map((table) => (
          <div
            key={table.id}
            className="relative aspect-square bg-red-400 flex items-center justify-center"
          >
            <div
              className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-orange-400 rounded-full"
              onDragOver={(event) => {
                handleDragEnterTable(table, event);
              }}
              onDrop={(event) => {
                handleDropOnTable(table, event);
              }}
            ></div>
            <div className="relative w-16 h-16 md:h-32 md:w-32 aspect-square bg-red-400 flex items-center justify-center pointer-events-none">
              <ul className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-orange-400 rounded-full ">
                <AnimatePresence>
                  {table.guests.map((guest, index) => {
                    const angle =
                      index *
                      ((2 * Math.PI) / Math.max(table.guests.length, 6));
                    const radius = width < 768 ? 32 : 64;
                    const chairRadius = width < 768 ? 48 : 96;

                    return (
                      <motion.li
                        key={guest.id}
                        className="absolute h-6 w-6 bg-blue-400 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 flex items-center justify-center pointer-events-auto"
                        draggable
                        onDragStart={() => handleGuestDragStart(guest)}
                        onDragOver={(event) => {
                          handleDragGuestEnterGuest(event, guest);
                        }}
                        onDrop={(event) => {
                          handleDropGuestOverGuest(event, guest, table);
                        }}
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
          </div>
        ))}
      </div>
    </div>
  );
};
