import { useEffect, useRef } from "react";
import { isFunction } from "./utils";

export default function useUnmount(fn: () => void): void {
  if (!isFunction(fn)) {
    `useUnmount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`;
  }

  const ref = useRef(fn);

  useEffect(
    () => () => {
      ref.current?.();
    },
    []
  );
}
