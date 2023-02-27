import { action, makeAutoObservable, observable } from "mobx";

export interface Store {
  count: number;
  addCount: () => void;
  desCount: () => void;
  reset: () => void;
}

class CounterStore implements Store {
  @observable count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @action addCount = (): void => {
    this.count++;
  };

  @action desCount = (): void => {
    this.count--;
  };

  @action reset(): void {
    this.count = 0;
  }
}

const counterStore = new CounterStore();

const stores: Record<string, Store> = {
  counterStore,
};

export default stores;
