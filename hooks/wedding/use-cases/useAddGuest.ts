import { Guest } from "@/domain/wedding/entities/Guest";
import { useMutationUseCaseWithNotifications } from "@/hooks/core/use-cases/useMutationUseCaseWithNotifications";
import { useWeddingApplication } from "@/hooks/wedding/application/useWeddingApplication";
import { UseMutationUseCaseOptions } from "@/hooks/core/use-cases/useMutationUseCase";

export function useAddGuest(
  options?: UseMutationUseCaseOptions<Guest, Guest, Array<Guest>>
) {
  const weddingApplication = useWeddingApplication();
  return useMutationUseCaseWithNotifications<Guest, Guest, Array<Guest>>({
    useCase: weddingApplication.domain.useCases.addGuest,
    options: {
      ...options,
      notification: (guest, level, results) => {
        return {
          id: `${guest.id}-add-guest`,
          level,
          message: `${guest.name} added! 🎉`,
        };
      },
    },
  });
}
