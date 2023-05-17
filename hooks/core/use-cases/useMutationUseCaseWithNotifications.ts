import {
  Notification,
  NotificationLevel,
} from "@/domain/core/application/Notification";
import { useNotifications } from "@/hooks/core/application/useNotifications";
import {
  useMutationUseCase,
  UseMutationUseCaseArguments,
  UseMutationUseCaseOptions,
  UseMutationUseCaseResults,
} from "@/hooks/core/use-cases/useMutationUseCase";

export interface UseMutationUseCaseWithNotificationsOptions<
  TVariables,
  TData,
  TOptimisticData
> extends UseMutationUseCaseOptions<TVariables, TData, TOptimisticData> {
  notification: (
    variables: TVariables,
    level: NotificationLevel,
    results?: TData
  ) => Notification;
}

export interface UseMutationUseCaseWithNotificationsArguments<
  TVariables,
  TData,
  TOptimisticData
> extends UseMutationUseCaseArguments<TVariables, TData, TOptimisticData> {
  options: UseMutationUseCaseWithNotificationsOptions<
    TVariables,
    TData,
    TOptimisticData
  >;
}

export function useMutationUseCaseWithNotifications<
  TVariables,
  TData,
  TOptimisticData
>({
  useCase,
  options,
}: UseMutationUseCaseWithNotificationsArguments<
  TVariables,
  TData,
  TOptimisticData
>): UseMutationUseCaseResults<TVariables, TData, TOptimisticData> {
  const { notify } = useNotifications();
  return useMutationUseCase({
    useCase,
    options: {
      ...options,
      onError: (error, variables, previousData) => {
        notify(options.notification(variables, "error", undefined));
        if (options.onError) {
          options.onError(error, variables, previousData);
        }
      },
      onSuccess: (data, variables, context) => {
        notify(options.notification(variables, "success", undefined));
        if (options.onSuccess) {
          options.onSuccess(data, variables, context);
        }
      },
    },
  });
}
