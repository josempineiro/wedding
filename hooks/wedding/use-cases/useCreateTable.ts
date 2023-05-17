import { Table } from "@/domain/wedding/entities/Table";
import { useMutationUseCaseWithNotifications } from "@/hooks/core/use-cases/useMutationUseCaseWithNotifications";
import { useWeddingApplication } from "@/hooks/wedding/application/useWeddingApplication";
import { UseMutationUseCaseOptions } from "@/hooks/core/use-cases/useMutationUseCase";

export function useCreateTable(
  options?: UseMutationUseCaseOptions<Table, Table, Array<Table>>
) {
  const weddingApplication = useWeddingApplication();
  return useMutationUseCaseWithNotifications<Table, Table, Array<Table>>({
    useCase: weddingApplication.domain.useCases.createTable,
    options: {
      ...options,
      notification: (table, level, results) => {
        return {
          id: `${table.id}-create-table`,
          level,
          message: `${table.name} added! 🎉`,
        };
      },
    },
  });
}
