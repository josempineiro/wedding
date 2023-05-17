export type NotificationLevel = "info" | "success" | "warning" | "error";

export interface Notification {
  id: string;
  message: string;
  level: NotificationLevel;
}
