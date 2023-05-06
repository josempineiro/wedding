import { Guest } from "@/domain/wedding/entities/Guest";
import { GuestRepository } from "@/domain/wedding/repositories/GuestRepository";
import { MutationUseCase } from "@/domain/core/use-cases/MutationUseCase";

export interface TagGuestParams {
  guests: Array<Guest>;
  tag: string;
}
export class TagGuestsUseCase
  implements MutationUseCase<TagGuestParams, Array<Guest>, Array<Guest>>
{
  private guestRepository: GuestRepository;
  constructor(guestRepository: GuestRepository) {
    this.guestRepository = guestRepository;
  }
  public async execute({ guests, tag }: TagGuestParams): Promise<Array<Guest>> {
    const updatedGuests = guests.map((guest) => {
      const taggedGuest = guest.clone<Guest>();
      taggedGuest.tag(tag);
      return taggedGuest;
    });

    return await this.guestRepository.saveAll(updatedGuests);
  }

  public optimisticExecute(
    params: TagGuestParams,
    guests: Array<Guest> | undefined
  ): Array<Guest> {
    if (guests) {
      return guests.map((guest) => {
        const updatedGuest = params.guests.find((taggedGuest) => {
          return taggedGuest.equals(guest);
        });
        if (updatedGuest) {
          const taggedGuest = guest.clone<Guest>();
          taggedGuest.tag(params.tag);
          return taggedGuest;
        }
        return guest;
      });
    }
    return params.guests.map((guest) => {
      const taggedGuest = guest.clone<Guest>();
      taggedGuest.tag(params.tag);
      return taggedGuest;
    });
  }

  getId(): string {
    return "guests";
  }
  get name(): string {
    return "Tag Guest";
  }
}
