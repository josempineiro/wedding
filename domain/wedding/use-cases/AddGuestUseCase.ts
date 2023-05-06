import { Guest } from "@/domain/wedding/entities/Guest";
import { GuestRepository } from "@/domain/wedding/repositories/GuestRepository";
import { MutationUseCase } from "@/domain/core/use-cases/MutationUseCase";

export interface AddGuestParams {
  name: string;
  email: string;
  weddingId: string;
}
export class AddGuestUseCase
  implements MutationUseCase<AddGuestParams, Guest, Array<Guest>>
{
  private guestRepository: GuestRepository;
  constructor(guestRepository: GuestRepository) {
    this.guestRepository = guestRepository;
  }
  public async execute(params: AddGuestParams): Promise<Guest> {
    return await this.guestRepository.save(
      Guest.create({
        name: params.name,
        weddingId: params.weddingId,
        email: params.email,
      })
    );
  }

  public optimisticExecute(
    params: AddGuestParams,
    guests: Array<Guest> | undefined
  ): Array<Guest> {
    const guest = Guest.create({
      name: params.name,
      weddingId: params.weddingId,
      email: params.email,
    });
    if (guests) {
      return [guest, ...guests];
    }
    return [guest];
  }

  public optimisticRollback(
    params: AddGuestParams,
    guest: Guest,
    guests: Array<Guest> | undefined
  ) {
    debugger;
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
