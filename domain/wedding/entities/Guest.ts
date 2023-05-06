import { v4 as uuidv4 } from "uuid";
import { Entity } from "@/domain/core/entities/Entity";

export type GuestId = string;

export interface IGuest {
  id: GuestId;
  name: string;
  email: string;
  weddingId: string;
  createdAt: Date;
  tags?: Array<string>;
}

interface CreateGuestParams {
  id?: GuestId;
  name: string;
  email?: string;
  weddingId: string;
  createdAt?: Date;
  tags?: Array<string>;
}

export class Guest extends Entity<GuestId> {
  name: string;
  email: string;
  weddingId: string;
  createdAt: Date;
  tags: Array<string>;

  constructor(
    id: GuestId,
    name: string,
    weddingId: string,
    email: string,
    createdAt: Date,
    tags: Array<string>
  ) {
    super(id);
    this.name = name;
    this.email = email;
    this.weddingId = weddingId;
    this.createdAt = createdAt;
    this.tags = tags;
  }
  public static create({
    id = uuidv4(),
    name,
    weddingId,
    email = "",
    tags = [],
    createdAt = new Date(),
  }: CreateGuestParams): Guest {
    return new Guest(id, name, weddingId, email, new Date(), tags);
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
