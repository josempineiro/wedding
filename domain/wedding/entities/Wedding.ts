import { v4 as uuidv4 } from "uuid";
import { Entity } from "@/domain/core/entities/Entity";

export type WeddingId = string;

export interface CreateWeddingParams {
  id?: WeddingId;
  name: string;
  datetime?: Date | undefined;
}

export class Wedding extends Entity<WeddingId> {
  readonly name: string;
  readonly datetime?: Date;

  constructor(id: string, name: string, datetime?: Date) {
    super(id);
    this.name = name;
    this.datetime = datetime;
  }

  public static create({
    id = uuidv4(),
    name,
    datetime = undefined,
  }: CreateWeddingParams): Wedding {
    return new Wedding(id, name, datetime);
  }
}
