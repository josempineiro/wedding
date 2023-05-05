import { Application } from "@/domain/core/application/Application";

export type useApplication<T extends Application> = () => T;
