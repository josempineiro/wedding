import { v4 as uuidv4 } from "uuid";
import { Entity } from "@/domain/core/entities/Entity";
import { Table } from "@/domain/wedding/entities/Table";

export type GuestId = string;

export interface IGuest {
  id: GuestId;
  name: string;
  email: string;
  weddingId: string;
  table?: Table;
  createdAt: Date;
}

interface CreateGuestParams {
  id?: GuestId;
  name: string;
  weddingId: string;
  email?: string;
  table?: Table;
  createdAt?: Date;
}

export class Guest extends Entity<GuestId> {
  name: string;
  email: string;
  weddingId: string;
  createdAt: Date;
  table?: Table;

  constructor(
    id: GuestId,
    name: string,
    weddingId: string,
    email: string,
    createdAt: Date,
    table?: Table
  ) {
    super(id);
    this.name = name;
    this.email = email;
    this.weddingId = weddingId;
    this.table = table;
    this.createdAt = createdAt;
  }
  public static create({
    id = uuidv4(),
    name,
    weddingId,
    email = "",
    table = undefined,
    createdAt = new Date(),
  }: CreateGuestParams): Guest {
    return new Guest(id, name, weddingId, email, new Date(), table);
  }

  public toString(): string {
    return this.name;
  }
}
