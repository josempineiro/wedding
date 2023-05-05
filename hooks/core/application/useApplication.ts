import { Application } from "@/domain/core/application/Application";
import { useContext } from "react";
import { ApplicationContext } from "@/components/core/application/Application";

export function useApplication<T extends Application>(): T {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error("useApplication must be used within a ApplicationProvider");
  }
  return context as T;
}
