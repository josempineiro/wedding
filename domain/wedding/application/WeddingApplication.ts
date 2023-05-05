import { Application } from "@/domain/core/application/Application";
import { GuestRepository } from "@/domain/wedding/repositories/GuestRepository";
import { FindAllGuestUseCase } from "@/domain/wedding/use-cases/FindAllGuestsUseCase";
import { AddGuestUseCase } from "@/domain/wedding/use-cases/AddGuestUseCase";

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
    };
  };
}

export class WeddingApplication implements IWeddingApplication {
  public domain: {
    useCases: {
      findAllGuests: FindAllGuestUseCase;
      addGuest: AddGuestUseCase;
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
      },
    };
  }
}
