import { Repository } from "@/domain/core/repositories/Repository";
import { Guest } from "@/domain/wedding/entities/Guest";

export interface GuestRepository extends Repository<Guest> {
  findByName(name: string): Promise<Guest[]>;
  findByEmail(email: string): Promise<Guest[]>;
}
