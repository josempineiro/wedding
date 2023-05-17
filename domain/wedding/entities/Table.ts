import { v4 as uuidv4 } from "uuid";
import { Entity } from "@/domain/core/entities/Entity";
import { Guest } from "@/domain/wedding/entities/Guest";

export type TableId = string;
export interface CreateTableParams {
  id?: TableId;
  name: string;
  guests?: Array<Guest>;
  host?: Guest | undefined;
}
export class Table extends Entity<TableId> {
  readonly name: string;
  readonly guests: Guest[];
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

  public addGuest(guest: Guest): void {
    this.guests.push(guest);
  }

  public getGuests(): Guest[] {
    return this.guests;
  }

  public getHost(): Guest | undefined {
    return this.host;
  }
}
