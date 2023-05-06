import { Entity } from "@/domain/core/entities/Entity";

export interface Repository<T extends Entity> {
  save(entity: T | T[]): Promise<T>;
  saveAll(entities: T[]): Promise<T[]>;
  delete(entities: T[]): Promise<void>;
  findById(id: string): Promise<T | undefined>;
  findAll(): Promise<Array<T>>;
}
