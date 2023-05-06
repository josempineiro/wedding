import { Guest } from "@/domain/wedding/entities/Guest";
import { GuestRepository } from "@/domain/wedding/repositories/GuestRepository";
import { MutationUseCase } from "@/domain/core/use-cases/MutationUseCase";

export class DeleteGuestUseCase
  implements MutationUseCase<Guest, void, Array<Guest>>
{
  private guestRepository: GuestRepository;
  constructor(guestRepository: GuestRepository) {
    this.guestRepository = guestRepository;
  }
  public async execute(deletedGuest: Guest): Promise<void> {
    return await this.guestRepository.delete(deletedGuest);
  }

  public optimisticExecute(
    deletedGuest: Guest,
    guests: Array<Guest> | undefined
  ): Array<Guest> {
    if (guests) {
      return guests.filter((guest) => !guest.equals(deletedGuest));
    }
    return [];
  }

  getId(): string {
    return "guests";
  }
  get name(): string {
    return "Delete Guest";
  }
}
