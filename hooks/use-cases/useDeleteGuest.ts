import { Guest } from "@/domain/wedding/entities/Guest";
import { useMutationUseCase } from "@/domain/core/hooks/useMutationUseCase";
import { useWeddingApplication } from "@/hooks/application/useWeddingApplication";

export function useDeleteGuest() {
  const weddingApplication = useWeddingApplication();
  return useMutationUseCase<Guest, Guest, Array<Guest>>({
    useCase: weddingApplication.domain.useCases.addGuest,
  });
}
