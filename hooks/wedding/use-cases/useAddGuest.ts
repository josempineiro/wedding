import { Guest } from "@/domain/wedding/entities/Guest";
import {
  useMutationUseCase,
  UseMutationUseCaseOptions,
} from "@/hooks/core/use-cases/useMutationUseCase";
import { useWeddingApplication } from "@/hooks/wedding/application/useWeddingApplication";

export function useAddGuest(
  options?: UseMutationUseCaseOptions<Guest, Guest, Array<Guest>>
) {
  const weddingApplication = useWeddingApplication();
  return useMutationUseCase<Guest, Guest, Array<Guest>>({
    useCase: weddingApplication.domain.useCases.addGuest,
    options,
  });
}
