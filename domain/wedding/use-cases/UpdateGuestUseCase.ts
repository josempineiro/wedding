import { Guest } from "@/domain/wedding/entities/Guest";
import { GuestRepository } from "@/domain/wedding/repositories/GuestRepository";
import { MutationUseCase } from "@/domain/core/use-cases/MutationUseCase";

export interface UpdateGuestParams {
  name: string;
  email: string;
}
export class UpdateGuestUseCase
  implements MutationUseCase<Guest, Guest, Array<Guest>>
{
  private guestRepository: GuestRepository;
  constructor(guestRepository: GuestRepository) {
    this.guestRepository = guestRepository;
  }
  public async execute(guest: Guest): Promise<Guest> {
    return await this.guestRepository.save(guest);
  }

  public optimisticExecute(
    updatedGuest: Guest,
    guests: Array<Guest> | undefined
  ): Array<Guest> {
    if (guests) {
      return guests.map((guest) => {
        if (guest.equals(updatedGuest)) {
          return updatedGuest;
        }
        return guest;
      });
    }
    return [updatedGuest];
  }

  getId(): string {
    return "guests";
  }
  get name(): string {
    return "Update Guest";
  }
}
