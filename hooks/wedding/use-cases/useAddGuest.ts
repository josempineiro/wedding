import { Guest } from "@/domain/wedding/entities/Guest";
import { AddGuestParams } from "@/domain/wedding/use-cases/AddGuestUseCase";
import { useMutationUseCase } from "@/hooks/core/use-cases/useMutationUseCase";
import { useWeddingApplication } from "@/hooks/wedding/application/useWeddingApplication";

export function useAddGuest() {
  const weddingApplication = useWeddingApplication();
  return useMutationUseCase<AddGuestParams, Guest, Array<Guest>>({
    useCase: weddingApplication.domain.useCases.addGuest,
  });
}
