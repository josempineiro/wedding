import { Guest } from "@/domain/wedding/entities/Guest";
import { useMutationUseCase } from "@/hooks/core/use-cases/useMutationUseCase";
import { useWeddingApplication } from "@/hooks/wedding/application/useWeddingApplication";
import { TagGuestParams } from "@/domain/wedding/use-cases/TagGuestsUseCase";

export function useTagGuests() {
  const weddingApplication = useWeddingApplication();
  return useMutationUseCase<TagGuestParams, Array<Guest>, Array<Guest>>({
    useCase: weddingApplication.domain.useCases.tagGuests,
  });
}
