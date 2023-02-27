import { useEffect } from "react";
import { isFunction } from "./utils";

export default function useMount(fn: () => void): void {
  if (!isFunction(fn)) {
    `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`;
  }

  useEffect((): void => {
    fn?.();
  }, []);
}
