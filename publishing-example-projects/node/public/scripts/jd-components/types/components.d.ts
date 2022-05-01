/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface JdSideDrawer {
        "closeMe": () => Promise<void>;
        "headerTitle": string;
        "open": boolean;
        /**
          * Developers should try to rely on publicly exposed methods as little as possible, and instead default to using properties and events as much as possible. As an app scales, we've found it's easier to manage and pass data through @Prop rather than public methods.
         */
        "openMe": () => Promise<void>;
    }
    interface JdSpinner {
    }
    interface JdStockFinder {
    }
    interface JdStockPrice {
        "stockSymbol": string;
    }
}
declare global {
    interface HTMLJdSideDrawerElement extends Components.JdSideDrawer, HTMLStencilElement {
    }
    var HTMLJdSideDrawerElement: {
        prototype: HTMLJdSideDrawerElement;
        new (): HTMLJdSideDrawerElement;
    };
    interface HTMLJdSpinnerElement extends Components.JdSpinner, HTMLStencilElement {
    }
    var HTMLJdSpinnerElement: {
        prototype: HTMLJdSpinnerElement;
        new (): HTMLJdSpinnerElement;
    };
    interface HTMLJdStockFinderElement extends Components.JdStockFinder, HTMLStencilElement {
    }
    var HTMLJdStockFinderElement: {
        prototype: HTMLJdStockFinderElement;
        new (): HTMLJdStockFinderElement;
    };
    interface HTMLJdStockPriceElement extends Components.JdStockPrice, HTMLStencilElement {
    }
    var HTMLJdStockPriceElement: {
        prototype: HTMLJdStockPriceElement;
        new (): HTMLJdStockPriceElement;
    };
    interface HTMLElementTagNameMap {
        "jd-side-drawer": HTMLJdSideDrawerElement;
        "jd-spinner": HTMLJdSpinnerElement;
        "jd-stock-finder": HTMLJdStockFinderElement;
        "jd-stock-price": HTMLJdStockPriceElement;
    }
}
declare namespace LocalJSX {
    interface JdSideDrawer {
        "headerTitle"?: string;
        "open"?: boolean;
    }
    interface JdSpinner {
    }
    interface JdStockFinder {
        "onJdSymbolSelected"?: (event: CustomEvent<string>) => void;
    }
    interface JdStockPrice {
        "stockSymbol"?: string;
    }
    interface IntrinsicElements {
        "jd-side-drawer": JdSideDrawer;
        "jd-spinner": JdSpinner;
        "jd-stock-finder": JdStockFinder;
        "jd-stock-price": JdStockPrice;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "jd-side-drawer": LocalJSX.JdSideDrawer & JSXBase.HTMLAttributes<HTMLJdSideDrawerElement>;
            "jd-spinner": LocalJSX.JdSpinner & JSXBase.HTMLAttributes<HTMLJdSpinnerElement>;
            "jd-stock-finder": LocalJSX.JdStockFinder & JSXBase.HTMLAttributes<HTMLJdStockFinderElement>;
            "jd-stock-price": LocalJSX.JdStockPrice & JSXBase.HTMLAttributes<HTMLJdStockPriceElement>;
        }
    }
}
