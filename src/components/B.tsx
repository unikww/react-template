import React from "react";
import { useStores } from "../stores/useStore";
import { Store } from "../stores/CounterStore";

type StoreA = { counterStore: Store } & { a: any };

const B = () => {
  const { counterStore } = useStores<StoreA>();

  const handleClick = (): void => {
    counterStore.addCount();
  };

  return <div onClick={handleClick}>11</div>;
};

export default B;
