import { WeddingApplication } from "@/domain/wedding/application/WeddingApplication";
import { useApplication } from "@/hooks/core/application/useApplication";

export const useWeddingApplication = () => {
  return useApplication<WeddingApplication>();
};
