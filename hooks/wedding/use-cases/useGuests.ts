import { Guest } from "@/domain/wedding/entities/Guest";
import { useQueryUseCase } from "@/hooks/core/use-cases/useQueryUseCase";
import { useWeddingApplication } from "@/hooks/wedding/application/useWeddingApplication";

export const useGuests = () => {
  const weddingApplication = useWeddingApplication();
  return useQueryUseCase<void, Array<Guest>>({
    useCase: weddingApplication.domain.useCases.findAllGuests,
  });
};
