import { Notification as ApplicationNotification } from "@/domain/core/application/Notification";
import classNames from "classnames";
export function Notification({
  notification,
}: {
  notification: ApplicationNotification;
}) {
  return (
    <div
      className={classNames([
        "fixed bottom-4 right-4 w-80 sm:w-80 p-4 rounded-lg shadow-lg",
        {
          "border bg-white border-red-500": notification.level === "error",
          "border bg-white border-green-500": notification.level === "success",
          "border bg-white border-yellow-500": notification.level === "warning",
          "border bg-white border-blue-500": notification.level === "info",
        },
      ])}
    >
      <p>{notification.message}</p>
    </div>
  );
}
