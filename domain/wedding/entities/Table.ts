import { Entity } from "@/domain/core/entities/Entity";
import { Guest } from "@/domain/wedding/entities/Guest";

export class Table extends Entity {
  private guests: Guest[];
  private host: Guest;

  constructor(id: string, host: Guest) {
    super(id);
    this.guests = [host];
    this.host = host;
  }

  public static create(id: string, host: Guest): Table {
    return new Table(id, host);
  }

  public addGuest(guest: Guest): void {
    this.guests.push(guest);
  }

  public getGuests(): Guest[] {
    return this.guests;
  }

  public getHost(): Guest {
    return this.host;
  }
}
