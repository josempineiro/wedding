import { Application } from "@/domain/core/application/Application";
import { createContext } from "react";

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
      {children}
    </ApplicationContext.Provider>
  );
};
