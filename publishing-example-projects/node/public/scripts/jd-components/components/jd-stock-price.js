import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { A as AV_API_KEY } from './global.js';
import { d as defineCustomElement$2 } from './spinner.js';

const stockPriceCss = ":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}:host{font-family:sans-serif;border:2px solid var(--purple);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:var(--error)}form input{font:inherit;color:var(--purple);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--purple);background:var(--purple);color:var(--white);cursor:pointer}form button:hover,form button:active{background:var(--light-purple);border-color:var(--light-purple)}form button:disabled,form button:disabled:hover,form button:disabled:active{background:var(--light-grey);border:1px solid #9f9f9f;color:#666;cursor:default}";

const StockPrice = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.isStockInputValid = false;
    this.loading = false;
  }
  stockSymbolChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.stockInput.value = newValue;
      this.fetchStockPrice(newValue);
    }
  }
  hostData() {
    return {
      class: this.errorMsg ? 'error' : ''
    };
  }
  onFetchStockPrice(event) {
    event.preventDefault();
    // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
    this.stockSymbol = this.stockInput.value;
    // this.fetchStockPrice(this.stockSymbol);
  }
  fetchStockPrice(stockSymbol) {
    this.loading = true;
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`;
    fetch(url)
      .then(res => {
      if (res.status !== 200) {
        throw new Error('Failed to fetch stock data');
      }
      return res.json();
    })
      .then(parsedRes => {
      if (!parsedRes['Global Quote']['05. price']) {
        throw new Error('Invalid stock symbol');
      }
      // console.log(parsedRes['Global Quote']['05. price']);
      this.currentPrice = +parsedRes['Global Quote']['05. price'];
      this.errorMsg = null;
      this.loading = false;
    })
      .catch(err => {
      // console.error('Error:', err)
      this.errorMsg = err.message;
      this.currentPrice = null;
      this.loading = false;
    });
  }
  onUserInput(event) {
    this.stockUserInput = event.target.value;
    this.isStockInputValid = (this.stockUserInput.trim() !== '');
    if (this.isStockInputValid) {
      this.stockSymbol = this.stockUserInput;
    }
  }
  onStockSymbolSelected(event) {
    console.log('Stock symbol selected:', event.detail);
    if (event.detail && event.detail !== this.stockSymbol) {
      this.stockSymbol = event.detail;
    }
  }
  /**
   * First life cycle hook
   * All props are passed to the component
   * Here we can set the initial state of variables. NOT in componentDidLoad
   */
  componentWillLoad() {
    if (this.stockSymbol) {
      this.stockUserInput = this.stockSymbol;
      this.isStockInputValid = true;
    }
  }
  componentDidLoad() {
    if (this.stockSymbol) {
      this.fetchStockPrice(this.stockSymbol);
    }
  }
  componentWillUpdate() { } // Run before render. Fired because state changed.
  componentDidUpdate() { } // Run after render.
  // componentDidUnload() {} // Run when removed from DOM. Clean up here intervals.
  disconnectedCallback() { } // Replaced componentDidUnload in Stencil 2
  __stencil_render() {
    let dataContent = h("p", null, "Please enter a symbol");
    if (this.errorMsg) {
      dataContent = h("p", null, this.errorMsg);
    }
    if (this.currentPrice) {
      dataContent = h("p", null, "Current price: $", this.currentPrice);
    }
    if (this.loading) {
      dataContent = h("jd-spinner", null);
    }
    return [
      h("form", { onSubmit: this.onFetchStockPrice.bind(this) }, h("input", { id: "stock-symbol", ref: el => this.stockInput = el, value: this.stockUserInput, onInput: this.onUserInput.bind(this) }), h("button", { type: "submit", disabled: !this.isStockInputValid }, "Fetch price")),
      h("div", null, dataContent)
    ];
  }
  get el() { return this; }
  static get watchers() { return {
    "stockSymbol": ["stockSymbolChanged"]
  }; }
  static get style() { return stockPriceCss; }
  render() { return h(Host, this.hostData(), this.__stencil_render()); }
}, [1, "jd-stock-price", {
    "stockSymbol": [1537, "stock-symbol"],
    "currentPrice": [32],
    "stockUserInput": [32],
    "isStockInputValid": [32],
    "errorMsg": [32],
    "loading": [32]
  }, [[16, "jdSymbolSelected", "onStockSymbolSelected"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["jd-stock-price", "jd-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "jd-stock-price":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StockPrice);
      }
      break;
    case "jd-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const JdStockPrice = StockPrice;
const defineCustomElement = defineCustomElement$1;

export { JdStockPrice, defineCustomElement };
