export interface IUseCase<Params, Result> {
  name: string;
  getId: (params: Params) => string;
  execute: (params: Params) => Promise<Result>;
}

export class UseCase<Params, Result> implements IUseCase<Params, Result> {
  public readonly name: string;
  public getId: (params: Params) => string;
  public readonly execute: (params: Params) => Promise<Result>;
  constructor({
    name,
    getId,
    execute,
  }: {
    name: string;
    getId: (params: Params) => string;
    execute: (params: Params) => Promise<Result>;
  }) {
    this.execute = execute;
    this.getId = getId;
    this.name = name;
  }
}
