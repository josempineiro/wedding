import { Guest } from "@/domain/wedding/entities/Guest";
import { GuestRepository } from "@/domain/wedding/repositories/GuestRepository";
import { MutationUseCase } from "@/domain/core/use-cases/MutationUseCase";

export class DeleteGuestsUseCase
  implements MutationUseCase<Array<Guest>, void, Array<Guest>>
{
  private guestRepository: GuestRepository;
  constructor(guestRepository: GuestRepository) {
    this.guestRepository = guestRepository;
  }
  public async execute(deletedGuests: Array<Guest>): Promise<void> {
    return await this.guestRepository.delete(deletedGuests);
  }

  public optimisticExecute(
    deletedGuests: Array<Guest>,
    guests: Array<Guest> | undefined
  ): Array<Guest> {
    if (guests) {
      return guests.filter((guest) => {
        return (
          deletedGuests.find((deletedGuest) => {
            return deletedGuest.equals(guest);
          }) === undefined
        );
      });
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
