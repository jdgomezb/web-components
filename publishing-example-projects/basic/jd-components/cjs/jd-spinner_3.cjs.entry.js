'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-de9667f2.js');

const spinnerCss = ":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}.lds-ring{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid var(--purple);border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:var(--purple) transparent transparent transparent}.lds-ring div:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s}@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const Spinner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "lds-ring" }, index.h("div", null), index.h("div", null), index.h("div", null), index.h("div", null)));
  }
};
Spinner.style = spinnerCss;

const AV_API_KEY = 'HSDD0H4H2QLMLP98';

const stockFinderCss = ":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}:host{font-family:sans-serif;border:2px solid var(--purple);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}form input{font:inherit;color:var(--purple);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--purple);background:var(--purple);color:var(--white);cursor:pointer}form button:hover,form button:active{background:var(--light-purple);border-color:var(--light-purple)}form button:disabled{background:var(--light-grey);border-color:var(--light-grey);color:var(--white);cursor:not-allowed}ul{margin:0;padding:0;list-style:none}li{display:grid;grid-template-columns:1fr 2fr;gap:.75rem;margin:0.25rem 0;padding:0.25rem;border-bottom:1px solid var(--light-grey)}li:hover{color:var(--light-purple);cursor:pointer;background-color:var(--lighter-grey)}";

const StockFinder = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.jdSymbolSelected = index.createEvent(this, "jdSymbolSelected", 7);
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
    let content = (index.h("ul", null, this.searchResults.map(result => (index.h("li", { onClick: this.onSelectSymbol.bind(this, result.symbol) }, index.h("b", null, result.symbol), " ", result.name)))));
    if (this.loading) {
      content = index.h("jd-spinner", null);
    }
    return [
      index.h("form", { onSubmit: this.onFindStocks.bind(this) }, index.h("input", { id: "stock-symbol", ref: el => this.stockNameInput = el }), index.h("button", { type: "submit" }, "Search Stock Symbol")),
      content
    ];
  }
};
StockFinder.style = stockFinderCss;

const stockPriceCss = ":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}:host{font-family:sans-serif;border:2px solid var(--purple);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:var(--error)}form input{font:inherit;color:var(--purple);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--purple);background:var(--purple);color:var(--white);cursor:pointer}form button:hover,form button:active{background:var(--light-purple);border-color:var(--light-purple)}form button:disabled,form button:disabled:hover,form button:disabled:active{background:var(--light-grey);border:1px solid #9f9f9f;color:#666;cursor:default}";

const StockPrice = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    let dataContent = index.h("p", null, "Please enter a symbol");
    if (this.errorMsg) {
      dataContent = index.h("p", null, this.errorMsg);
    }
    if (this.currentPrice) {
      dataContent = index.h("p", null, "Current price: $", this.currentPrice);
    }
    if (this.loading) {
      dataContent = index.h("jd-spinner", null);
    }
    return [
      index.h("form", { onSubmit: this.onFetchStockPrice.bind(this) }, index.h("input", { id: "stock-symbol", ref: el => this.stockInput = el, value: this.stockUserInput, onInput: this.onUserInput.bind(this) }), index.h("button", { type: "submit", disabled: !this.isStockInputValid }, "Fetch price")),
      index.h("div", null, dataContent)
    ];
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "stockSymbol": ["stockSymbolChanged"]
  }; }
  render() { return index.h(index.Host, this.hostData(), this.__stencil_render()); }
};
StockPrice.style = stockPriceCss;

exports.jd_spinner = Spinner;
exports.jd_stock_finder = StockFinder;
exports.jd_stock_price = StockPrice;
