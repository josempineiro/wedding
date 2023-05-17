import { Guest } from "@/domain/wedding/entities/Guest";
import { useMutationUseCase } from "@/hooks/core/use-cases/useMutationUseCase";
import { useWeddingApplication } from "@/hooks/wedding/application/useWeddingApplication";
import { UseMutationUseCaseOptions } from "@/hooks/core/use-cases/useMutationUseCase";

export function useUpdateGuest(
  options?: UseMutationUseCaseOptions<Guest, Guest, Array<Guest>>
) {
  const weddingApplication = useWeddingApplication();
  return useMutationUseCase<Guest, Guest, Array<Guest>>({
    useCase: weddingApplication.domain.useCases.updateGuest,
    options,
  });
}
