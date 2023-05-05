import { Guest } from "@/domain/wedding/entities/Guest";
import { useQueryUseCase } from "@/domain/core/hooks/useQueryUseCase";
import { useWeddingApplication } from "@/hooks/application/useWeddingApplication";

export const useGuests = () => {
  const weddingApplication = useWeddingApplication();
  return useQueryUseCase<void, Array<Guest>>({
    useCase: weddingApplication.domain.useCases.findAllGuests,
  });
};
