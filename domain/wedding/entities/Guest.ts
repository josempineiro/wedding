import { v4 as uuidv4 } from "uuid";
import { Entity } from "@/domain/core/entities/Entity";

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
}

export class Guest extends Entity<GuestId> {
  readonly name: string;
  readonly email: string;
  readonly weddingId: string;
  readonly createdAt: Date;
  tags: Array<string>;
  readonly birthday: Date | undefined;

  constructor(
    id: GuestId,
    name: string,
    weddingId: string,
    email: string,
    createdAt: Date,
    tags: Array<string>,
    birthday: Date | undefined
  ) {
    super(id);
    this.name = name;
    this.email = email;
    this.weddingId = weddingId;
    this.createdAt = createdAt;
    this.tags = tags;
    this.birthday = birthday;
  }
  public static create({
    id = uuidv4(),
    name,
    weddingId,
    email = "",
    birthday = undefined,
    tags = [],
  }: CreateGuestParams): Guest {
    return new Guest(id, name, weddingId, email, new Date(), tags, birthday);
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

  public toString(): string {
    return this.name;
  }
}
