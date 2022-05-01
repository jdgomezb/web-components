import type { Components, JSX } from "../types/components";

interface JdSpinner extends Components.JdSpinner, HTMLElement {}
export const JdSpinner: {
  prototype: JdSpinner;
  new (): JdSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
