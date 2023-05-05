import { Entity } from "@/domain/core/entities/Entity";

export interface Repository<T extends Entity> {
  save(entity: T): Promise<T>;
  delete(entity: T): Promise<void>;
  findById(id: string): Promise<T | undefined>;
  findAll(): Promise<Array<T>>;
}
