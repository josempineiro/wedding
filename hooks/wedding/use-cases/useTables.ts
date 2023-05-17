import { Table } from "@/domain/wedding/entities/Table";
import { useQueryUseCase } from "@/hooks/core/use-cases/useQueryUseCase";
import { useWeddingApplication } from "@/hooks/wedding/application/useWeddingApplication";

export const useTables = () => {
  const weddingApplication = useWeddingApplication();
  return useQueryUseCase<void, Array<Table>>({
    useCase: weddingApplication.domain.useCases.findAllTables,
  });
};
