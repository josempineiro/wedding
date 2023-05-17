import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Notification as ApplicationNotification } from "@/domain/core/application/Notification";
import { Notification } from "@/components/core/application/notifications/Notification";
import { motion, AnimatePresence } from "framer-motion";

export interface NotificationsContextValue {
  notifications: ApplicationNotification[];
  notify: (notification: ApplicationNotification) => void;
}

export const NotificationsContext = createContext<
  NotificationsContextValue | undefined
>(undefined);

export interface NotificationsProviderProps {
  children: React.ReactNode;
}

export const NotificationsProvider = ({
  children,
}: NotificationsProviderProps) => {
  const [notifications, setNotifications] = useState<ApplicationNotification[]>(
    []
  );

  useEffect(() => {
    if (notifications.length > 0) {
      const timeout = setTimeout(() => {
        setNotifications(notifications.slice(1));
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [notifications]);

  const notify = useCallback((notification: ApplicationNotification) => {
    setNotifications((notifications) => [...notifications, notification]);
  }, []);

  const notificationsContextValue = useMemo(
    () => ({ notifications, notify }),
    [notifications, notify]
  );

  return (
    <NotificationsContext.Provider value={notificationsContextValue}>
      {children}
      {notifications.length > 0 && (
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.li
              key={notification.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Notification notification={notification} />
            </motion.li>
          ))}
        </AnimatePresence>
      )}
    </NotificationsContext.Provider>
  );
};
