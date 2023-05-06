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

  set<T extends Entity<TId>>(obj: any): T {
    Object.assign(this, obj);
    return this as unknown as T;
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

  public clone<T extends Entity<TId>>(): T {
    return Object.assign(Object.create(this), this) as T;
  }
}
