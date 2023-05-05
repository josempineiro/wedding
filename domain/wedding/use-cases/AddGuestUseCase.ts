import { Guest } from "@/domain/wedding/entities/Guest";
import { GuestRepository } from "@/domain/wedding/repositories/GuestRepository";
import { MutationUseCase } from "@/domain/core/use-cases/MutationUseCase";

export class AddGuestUseCase
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
    guest: Guest,
    guests: Array<Guest> | undefined
  ): Array<Guest> {
    if (guests) {
      return [guest, ...guests];
    }
    return [guest];
  }

  getId(): string {
    return "guests";
  }
  get name(): string {
    return "Add Guest";
  }
}
