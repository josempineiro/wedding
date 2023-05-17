import { useContext } from "react";
import {
  NotificationsContext,
  NotificationsContextValue,
} from "@/components/core/application/notifications/NotificationsProvider";

export function useNotifications(): NotificationsContextValue {
  const notifications = useContext<NotificationsContextValue | undefined>(
    NotificationsContext
  );
  if (notifications === undefined) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider"
    );
  }
  return notifications;
}
