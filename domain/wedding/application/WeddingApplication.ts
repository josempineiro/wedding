import { Application } from "@/domain/core/application/Application";
import { GuestRepository } from "@/domain/wedding/repositories/GuestRepository";
import { FindAllGuestUseCase } from "@/domain/wedding/use-cases/FindAllGuestsUseCase";
import { AddGuestUseCase } from "@/domain/wedding/use-cases/AddGuestUseCase";
import { DeleteGuestsUseCase } from "@/domain/wedding/use-cases/DeleteGuestsUseCase";
import { UpdateGuestUseCase } from "@/domain/wedding/use-cases/UpdateGuestUseCase";
import { TagGuestsUseCase } from "@/domain/wedding/use-cases/TagGuestsUseCase";

export interface IWeddingApplication extends Application {
  infrastructure: {
    adapters: {
      guestRepository: GuestRepository;
    };
  };
  domain: {
    useCases: {
      findAllGuests: FindAllGuestUseCase;
      addGuest: AddGuestUseCase;
      deleteGuests: DeleteGuestsUseCase;
      tagGuests: TagGuestsUseCase;
    };
  };
}

export class WeddingApplication implements IWeddingApplication {
  public domain: {
    useCases: {
      findAllGuests: FindAllGuestUseCase;
      addGuest: AddGuestUseCase;
      deleteGuests: DeleteGuestsUseCase;
      updateGuest: UpdateGuestUseCase;
      tagGuests: TagGuestsUseCase;
    };
  };
  constructor(
    public infrastructure: {
      adapters: {
        guestRepository: GuestRepository;
      };
    }
  ) {
    this.domain = {
      useCases: {
        findAllGuests: new FindAllGuestUseCase(
          this.infrastructure.adapters.guestRepository
        ),
        addGuest: new AddGuestUseCase(
          this.infrastructure.adapters.guestRepository
        ),
        deleteGuests: new DeleteGuestsUseCase(
          this.infrastructure.adapters.guestRepository
        ),
        updateGuest: new UpdateGuestUseCase(
          this.infrastructure.adapters.guestRepository
        ),
        tagGuests: new TagGuestsUseCase(
          this.infrastructure.adapters.guestRepository
        ),
      },
    };
  }
}
