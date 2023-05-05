import {
  useMutation,
  useQueryClient,
  UseMutationResult,
  UseMutationOptions,
} from "react-query";
import { MutationUseCase } from "@/domain/core/MutationUseCase";

type TRollback = () => void;

export const useMutationUseCase = <TVariables, TData, TOptimisticData>({
  useCase,
  options = {},
}: {
  useCase: MutationUseCase<TVariables, TData, TOptimisticData>;
  options?: UseMutationOptions<TData, unknown, TVariables, TRollback>;
  params?: TVariables;
}): UseMutationResult<TData, unknown, TVariables, TRollback> => {
  const queryClient = useQueryClient();
  return useMutation<TData, unknown, TVariables, TRollback>({
    ...options,
    mutationFn: (params) => {
      return useCase.execute(params);
    },
    onMutate: (params) => {
      if (options.onMutate) {
        options.onMutate(params);
      }
      const previousData = queryClient.getQueryData<TOptimisticData>(
        useCase.getId(params)
      );
      if (useCase.optimisticExecute) {
        queryClient.setQueryData(
          useCase.getId(params),
          useCase.optimisticExecute(params, previousData)
        );
        return () => {
          queryClient.setQueryData(useCase.getId(params), previousData);
        };
      }
      return () => {};
    },
    onError: (error, variables, rollback) => {
      if (options.onError) {
        options.onError(error, variables, rollback);
      }
      if (rollback) {
        rollback();
      }
    },
  });
};
