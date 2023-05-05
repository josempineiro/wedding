import { UseCase } from "@/domain/core/use-cases/UseCase";

export interface MutationUseCase<Params, Result, OptimisticResult = Result>
  extends UseCase<Params, Result> {
  optimisticExecute?: (
    params: Params,
    previousResult: OptimisticResult | undefined
  ) => OptimisticResult;
}
