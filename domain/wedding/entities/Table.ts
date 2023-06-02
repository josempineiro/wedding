import { v4 as uuidv4 } from "uuid";
import { Entity } from "@/domain/core/entities/Entity";
import { Guest, GuestId } from "@/domain/wedding/entities/Guest";

export type TableId = string;
export interface CreateTableParams {
  id?: TableId;
  name: string;
  guests?: Array<Guest>;
  host?: Guest | undefined;
}
export class Table extends Entity<TableId> {
  readonly name: string;
  guests: Guest[];
  readonly host?: Guest;

  constructor(id: string, name: string, guests: Guest[], host?: Guest) {
    super(id);
    this.name = name;
    this.guests = guests;
    this.host = host;
  }

  public static create({
    id = uuidv4(),
    name,
    host = undefined,
    guests = [],
  }: CreateTableParams): Table {
    return new Table(id, name, guests, host);
  }

  public sortGuests(ids: GuestId[]): void {
    this.guests = this.guests.sort((a, b) => {
      if (ids.indexOf(a.id) < ids.indexOf(b.id)) {
        return -1;
      }
      if (ids.indexOf(a.id) > ids.indexOf(b.id)) {
        return 1;
      }
      return 0;
    });
  }
  public removeGuest(guest: Guest): void {
    this.guests.splice(this.guests.indexOf(guest), 1);
  }
  public addGuest(guest: Guest): void {
    this.guests.push(guest);
  }
}
