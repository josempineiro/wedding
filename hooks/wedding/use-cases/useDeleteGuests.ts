import { Guest } from "@/domain/wedding/entities/Guest";
import { useMutationUseCaseWithNotifications } from "@/hooks/core/use-cases/useMutationUseCaseWithNotifications";
import { useWeddingApplication } from "@/hooks/wedding/application/useWeddingApplication";
import { UseMutationUseCaseOptions } from "@/hooks/core/use-cases/useMutationUseCase";

export function useDeleteGuests(
  options?: UseMutationUseCaseOptions<Array<Guest>, void, Array<Guest>>
) {
  const weddingApplication = useWeddingApplication();
  return useMutationUseCaseWithNotifications<Array<Guest>, void, Array<Guest>>({
    useCase: weddingApplication.domain.useCases.deleteGuests,
    options: {
      ...options,
      notification: (guests, level) => {
        if (guests.length === 1) {
          return {
            id: `${guests[0].id}-delete-guests`,
            level,
            message: `${guests[0].name} was removed from the wedding`,
          };
        }
        return {
          id: "delete-guests",
          level,
          message: `${guests?.length} less seats at the wedding`,
        };
      },
    },
  });
}
