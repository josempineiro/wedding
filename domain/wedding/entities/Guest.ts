import { v4 as uuidv4 } from "uuid";
import { Entity } from "@/domain/core/entities/Entity";
import { Table, TableId } from "@/domain/wedding/entities/Table";

export type GuestId = string;

export interface IGuest {
  id: GuestId;
  name: string;
  email: string;
  weddingId: string;
  birthday?: Date;
  createdAt: Date;
  tags?: Array<string>;
}

export interface CreateGuestParams {
  id?: GuestId;
  name: string;
  email?: string;
  birthday?: Date;
  weddingId: string;
  createdAt?: Date;
  tags?: Array<string>;
  table?: Table;
  tablePosition?: number;
}

export class Guest extends Entity<GuestId> {
  readonly name: string;
  readonly email: string;
  readonly weddingId: string;
  readonly createdAt: Date;
  tags: Array<string>;
  readonly birthday: Date | undefined;
  table: Table | undefined;
  tablePosition: number | undefined;

  constructor(
    id: GuestId,
    name: string,
    weddingId: string,
    email: string,
    createdAt: Date,
    tags: Array<string>,
    birthday: Date | undefined,
    table?: Table,
    tablePosition?: number
  ) {
    super(id);
    this.name = name;
    this.email = email;
    this.weddingId = weddingId;
    this.createdAt = createdAt;
    this.tags = tags;
    this.birthday = birthday;
    this.table = table;
    this.tablePosition = tablePosition;
  }
  public static create({
    id = uuidv4(),
    name,
    weddingId,
    email = "",
    birthday = undefined,
    tags = [],
    table,
    tablePosition,
  }: CreateGuestParams): Guest {
    return new Guest(
      id,
      name,
      weddingId,
      email,
      new Date(),
      tags,
      birthday,
      table,
      tablePosition
    );
  }

  public tag(tag: string): void {
    if (this.tags.includes(tag)) {
      return;
    }
    this.tags.push(tag);
  }

  public untag(removedTag: string): void {
    this.tags = this.tags.filter((tag) => tag !== removedTag);
  }

  public assignToTable(table: Table, position?: number): void {
    this.table = table;
    this.tablePosition = position;
  }

  public unassignFromTable(): void {
    this.table = undefined;
    this.tablePosition = undefined;
  }

  public hasTable(): boolean {
    return !!this.table;
  }

  public toString(): string {
    return this.name;
  }
}
