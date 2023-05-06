import { Guest } from "@/domain/wedding/entities/Guest";
import { useMutationUseCase } from "@/hooks/core/use-cases/useMutationUseCase";
import { useWeddingApplication } from "@/hooks/wedding/application/useWeddingApplication";

export function useDeleteGuests() {
  const weddingApplication = useWeddingApplication();
  return useMutationUseCase<Array<Guest>, void, Array<Guest>>({
    useCase: weddingApplication.domain.useCases.deleteGuests,
  });
}
