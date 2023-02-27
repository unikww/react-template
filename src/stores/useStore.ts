import React, { useContext } from "react";

const MobxStore = React.createContext<any>({});

function createStoreProvider() {
  return MobxStore.Provider;
}

export const Provider = createStoreProvider();

export function useStores<T extends Record<string, unknown>>() {
  return useContext<T>(MobxStore);
}
