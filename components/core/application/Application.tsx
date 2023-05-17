import { createContext } from "react";
import { Application } from "@/domain/core/application/Application";
import { NotificationsProvider } from "@/components/core/application/notifications/NotificationsProvider";
export const ApplicationContext = createContext<Application | undefined>(
  undefined
);

export const ApplicationProvider = ({
  application,
  children,
}: {
  children: React.ReactNode;
  application: Application;
}) => {
  return (
    <ApplicationContext.Provider value={application}>
      <div id="modal-root"></div>
      <NotificationsProvider>{children}</NotificationsProvider>
    </ApplicationContext.Provider>
  );
};
