export function isFunction(fn: unknown): fn is Function {
  return typeof fn === "function";
}
