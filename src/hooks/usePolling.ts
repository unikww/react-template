import { useCallback, useRef } from "react";

interface Options {
  interval: number;
}

const defaultOptions = {
  interval: 1000,
};

export function usePolling(fn: () => Promise<void> | void, options: Options = defaultOptions) {
  const timer = useRef<NodeJS.Timer | null>(null);

  const startPolling = useCallback(() => {
    timer.current = setInterval((): void => {
      fn();
    }, options.interval);
  }, []);

  const endPolling = useCallback((): void => {
    if (timer.current) {
      clearInterval(timer.current);
    }
  }, []);

  return {
    startPolling,
    endPolling,
  };
}
