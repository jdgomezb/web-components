import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const spinnerCss = ":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}.lds-ring{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid var(--purple);border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:var(--purple) transparent transparent transparent}.lds-ring div:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s}@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const Spinner = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "lds-ring" }, h("div", null), h("div", null), h("div", null), h("div", null)));
  }
  static get style() { return spinnerCss; }
}, [1, "jd-spinner"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["jd-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "jd-spinner":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Spinner);
      }
      break;
  } });
}

export { Spinner as S, defineCustomElement as d };
