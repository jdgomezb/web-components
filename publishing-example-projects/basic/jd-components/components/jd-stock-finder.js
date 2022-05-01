import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { A as AV_API_KEY } from './global.js';
import { d as defineCustomElement$2 } from './spinner.js';

const stockFinderCss = ":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}:host{font-family:sans-serif;border:2px solid var(--purple);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}form input{font:inherit;color:var(--purple);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--purple);background:var(--purple);color:var(--white);cursor:pointer}form button:hover,form button:active{background:var(--light-purple);border-color:var(--light-purple)}form button:disabled{background:var(--light-grey);border-color:var(--light-grey);color:var(--white);cursor:not-allowed}ul{margin:0;padding:0;list-style:none}li{display:grid;grid-template-columns:1fr 2fr;gap:.75rem;margin:0.25rem 0;padding:0.25rem;border-bottom:1px solid var(--light-grey)}li:hover{color:var(--light-purple);cursor:pointer;background-color:var(--lighter-grey)}";

const StockFinder = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.jdSymbolSelected = createEvent(this, "jdSymbolSelected", 7);
    this.searchResults = [];
    this.loading = false;
  }
  onFindStocks(event) {
    event.preventDefault();
    // console.log(this.stockNameInput.value);
    this.fetchStockSymbols(this.stockNameInput.value);
  }
  fetchStockSymbols(stockSymbol) {
    this.loading = true;
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockSymbol}&apikey=${AV_API_KEY}`;
    fetch(url)
      .then(res => {
      if (res.status !== 200) {
        throw new Error('Failed to fetch stock data');
      }
      return res.json();
    })
      .then(parsedRes => {
      // console.log(parsedRes);
      this.searchResults = parsedRes['bestMatches'].map(match => {
        return {
          name: match['2. name'],
          symbol: match['1. symbol']
        };
      });
      this.errorMsg = null;
      this.loading = false;
    })
      .catch(err => {
      // console.error('Error:', err)
      this.errorMsg = err.message;
      this.loading = false;
    });
  }
  onSelectSymbol(symbol) {
    this.jdSymbolSelected.emit(symbol);
  }
  render() {
    let content = (h("ul", null, this.searchResults.map(result => (h("li", { onClick: this.onSelectSymbol.bind(this, result.symbol) }, h("b", null, result.symbol), " ", result.name)))));
    if (this.loading) {
      content = h("jd-spinner", null);
    }
    return [
      h("form", { onSubmit: this.onFindStocks.bind(this) }, h("input", { id: "stock-symbol", ref: el => this.stockNameInput = el }), h("button", { type: "submit" }, "Search Stock Symbol")),
      content
    ];
  }
  static get style() { return stockFinderCss; }
}, [1, "jd-stock-finder", {
    "errorMsg": [32],
    "searchResults": [32],
    "loading": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["jd-stock-finder", "jd-spinner"];
  components.forEach(tagName => { switch (tagName) {
    case "jd-stock-finder":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, StockFinder);
      }
      break;
    case "jd-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const JdStockFinder = StockFinder;
const defineCustomElement = defineCustomElement$1;

export { JdStockFinder, defineCustomElement };
