import {
  useMutation,
  useQueryClient,
  UseMutationResult,
  UseMutationOptions,
} from "react-query";
import { MutationUseCase } from "@/domain/core/use-cases/MutationUseCase";

export type UseMutationUseCaseOptions<TData, TVariables, TOptimisticData> =
  UseMutationOptions<TData, unknown, TVariables, TOptimisticData>;

export const useMutationUseCase = <TVariables, TData, TOptimisticData>({
  useCase,
  options = {},
}: {
  useCase: MutationUseCase<TVariables, TData, TOptimisticData>;
  options?: UseMutationUseCaseOptions<TData, TVariables, TOptimisticData>;
  params?: TVariables;
}): UseMutationResult<TData, unknown, TVariables, TOptimisticData> => {
  const queryClient = useQueryClient();
  return useMutation<TData, unknown, TVariables, TOptimisticData>({
    ...options,
    mutationFn: (variables) => {
      return useCase.execute(variables);
    },
    onMutate: (variables) => {
      if (options.onMutate) {
        options.onMutate(variables);
      }
      const previousData = queryClient.getQueryData<TOptimisticData>(
        useCase.getId(variables)
      );
      if (useCase.optimisticExecute) {
        queryClient.setQueryData(
          useCase.getId(variables),
          useCase.optimisticExecute(variables, previousData)
        );
        return previousData;
      }
      return previousData;
    },
    onError: (error, variables, previousData) => {
      if (options.onError) {
        options.onError(error, variables, previousData);
      }
      if (previousData) {
        queryClient.setQueryData(useCase.getId(variables), previousData);
      }
    },
  });
};
