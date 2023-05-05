import { Guest } from "@/domain/wedding/entities/Guest";
import { useMutationUseCase } from "@/hooks/core/use-cases/useMutationUseCase";
import { useWeddingApplication } from "@/hooks/wedding/application/useWeddingApplication";

export function useDeleteGuest() {
  const weddingApplication = useWeddingApplication();
  return useMutationUseCase<Guest, Guest, Array<Guest>>({
    useCase: weddingApplication.domain.useCases.addGuest,
  });
}
