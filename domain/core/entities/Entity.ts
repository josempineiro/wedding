export interface IEntity<T = string> {
  id: T;
}

export abstract class Entity<TId = string> implements IEntity<TId> {
  public readonly id: TId;

  constructor(id: TId) {
    this.id = id;
  }

  getId(): TId {
    return this.id;
  }

  public equals(obj?: Entity<TId>): boolean {
    if (obj == null || obj == undefined) {
      return false;
    }

    if (this == obj) {
      return true;
    }
    return this.id === obj.id;
  }
}
