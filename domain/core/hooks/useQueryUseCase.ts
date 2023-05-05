import {
  useQuery,
  UseQueryResult,
  UseQueryOptions as UseQueryOptionsReactQuery,
} from "react-query";
import { UseCase } from "@/domain/core/use-cases/UseCase";

export const useQueryUseCase = <Params, Result>({
  useCase,
  options = {},
  params = {} as Params,
}: {
  useCase: UseCase<Params, Result>;
  options?: UseQueryOptionsReactQuery<Result>;
  params?: Params;
}): UseQueryResult<Result> =>
  useQuery<Result, unknown>({
    ...options,
    queryKey: useCase.getId(params),
    queryFn: () => useCase.execute(params),
  });
