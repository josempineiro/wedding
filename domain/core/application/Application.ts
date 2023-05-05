import { Repository } from "@/domain/core/repositories/Repository";
import { Entity } from "@/domain/core/entities/Entity";
import { UseCase } from "@/domain/core/use-cases/UseCase";

export interface Application {
  infrastructure: {
    adapters: {
      [key: string]: Repository<Entity>;
    };
  };
  domain: {
    useCases: {
      [key: string]: UseCase<any, any>;
    };
  };
}
