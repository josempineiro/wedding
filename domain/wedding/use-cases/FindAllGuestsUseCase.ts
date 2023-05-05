import { GuestRepository } from "@/domain/wedding/repositories/GuestRepository";
import { UseCase } from "@/domain/core/use-cases/UseCase";
import { Guest } from "@/domain/wedding/entities/Guest";

export class FindAllGuestUseCase implements UseCase<void, Array<Guest>> {
  guestsRepository: GuestRepository;
  constructor(guestRepository: GuestRepository) {
    this.guestsRepository = guestRepository;
  }
  public async execute(): Promise<Array<Guest>> {
    return await this.guestsRepository.findAll();
  }
  getId(): string {
    return "guests";
  }
  get name(): string {
    return "Find All Guests";
  }
}
