import type { Components, JSX } from "../types/components";

interface JdStockFinder extends Components.JdStockFinder, HTMLElement {}
export const JdStockFinder: {
  prototype: JdStockFinder;
  new (): JdStockFinder;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
