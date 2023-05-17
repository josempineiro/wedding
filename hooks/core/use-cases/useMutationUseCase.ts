import {
  useMutation,
  useQueryClient,
  UseMutationResult,
  UseMutationOptions,
} from "react-query";
import { MutationUseCase } from "@/domain/core/use-cases/MutationUseCase";

export type UseMutationUseCaseOptions<TVariables, TData, TOptimisticData> =
  UseMutationOptions<TData, unknown, TVariables, TOptimisticData>;

export interface UseMutationUseCaseArguments<
  TVariables,
  TData,
  TOptimisticData
> {
  useCase: MutationUseCase<TVariables, TData, TOptimisticData>;
  options?: UseMutationUseCaseOptions<TVariables, TData, TOptimisticData>;
}

export type UseMutationUseCaseResults<TVariables, TData, TOptimisticData> =
  UseMutationResult<TData, unknown, TVariables, TOptimisticData>;

export const useMutationUseCase = <TVariables, TData, TOptimisticData>({
  useCase,
  options = {},
}: UseMutationUseCaseArguments<
  TVariables,
  TData,
  TOptimisticData
>): UseMutationResult<TData, unknown, TVariables, TOptimisticData> => {
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
