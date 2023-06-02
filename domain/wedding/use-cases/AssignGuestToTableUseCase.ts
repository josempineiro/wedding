import { Guest } from "@/domain/wedding/entities/Guest";
import { Table } from "@/domain/wedding/entities/Table";
import { GuestRepository } from "@/domain/wedding/repositories/GuestRepository";
import { MutationUseCase } from "@/domain/core/use-cases/MutationUseCase";

export interface TableAssignment {
  table: Table | undefined;
  guest: Guest;
  position?: number;
}

export class AssignGuestToTableUseCase
  implements MutationUseCase<TableAssignment, Guest, Array<Guest>>
{
  private guestRepository: GuestRepository;
  constructor(guestRepository: GuestRepository) {
    this.guestRepository = guestRepository;
  }
  public async execute(tableAssignment: TableAssignment): Promise<Guest> {
    const guestWithTable = await this.guestRepository.findById(
      tableAssignment.guest.id
    );
    if (guestWithTable) {
      if (tableAssignment.table) {
        guestWithTable.assignToTable(
          tableAssignment.table,
          tableAssignment.position
        );
      } else {
        guestWithTable.unassignFromTable();
      }
      await this.guestRepository.save(guestWithTable);
      return guestWithTable;
    }
    throw new Error("Guest not found");
  }

  public optimisticExecute(
    tableAssignment: TableAssignment,
    guests: Array<Guest> | undefined
  ) {
    const assignedGuest = tableAssignment.guest.clone<Guest>();
    if (tableAssignment.table) {
      assignedGuest.assignToTable(
        tableAssignment.table,
        tableAssignment.position
      );
    } else {
      assignedGuest.unassignFromTable();
    }
    if (guests) {
      return guests.map((guest) => {
        if (guest.equals(tableAssignment.guest)) {
          return assignedGuest;
        }
        return guest;
      });
    }
    return [assignedGuest];
  }

  getId(): string {
    return "guests";
  }
  get name(): string {
    return "Assign Guest to table";
  }
}
