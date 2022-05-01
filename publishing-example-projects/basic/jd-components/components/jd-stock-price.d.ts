import type { Components, JSX } from "../types/components";

interface JdStockPrice extends Components.JdStockPrice, HTMLElement {}
export const JdStockPrice: {
  prototype: JdStockPrice;
  new (): JdStockPrice;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
