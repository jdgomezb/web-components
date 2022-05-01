import type { Components, JSX } from "../types/components";

interface JdSideDrawer extends Components.JdSideDrawer, HTMLElement {}
export const JdSideDrawer: {
  prototype: JdSideDrawer;
  new (): JdSideDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
