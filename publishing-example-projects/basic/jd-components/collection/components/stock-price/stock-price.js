import { Component, Element, h, Listen, Prop, State, Watch } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';
export class StockPrice {
  constructor() {
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
  render() {
    let dataContent = h("p", null, "Please enter a symbol");
    if (this.errorMsg) {
      dataContent = h("p", null, this.errorMsg);
    }
    if (this.currentPrice) {
      dataContent = h("p", null,
        "Current price: $",
        this.currentPrice);
    }
    if (this.loading) {
      dataContent = h("jd-spinner", null);
    }
    return [
      h("form", { onSubmit: this.onFetchStockPrice.bind(this) },
        h("input", { id: "stock-symbol", ref: el => this.stockInput = el, value: this.stockUserInput, onInput: this.onUserInput.bind(this) }),
        h("button", { type: "submit", disabled: !this.isStockInputValid }, "Fetch price")),
      h("div", null, dataContent)
    ];
  }
  static get is() { return "jd-stock-price"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["stock-price.css"]
  }; }
  static get styleUrls() { return {
    "$": ["stock-price.css"]
  }; }
  static get properties() { return {
    "stockSymbol": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "stock-symbol",
      "reflect": true
    }
  }; }
  static get states() { return {
    "currentPrice": {},
    "stockUserInput": {},
    "isStockInputValid": {},
    "errorMsg": {},
    "loading": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "stockSymbol",
      "methodName": "stockSymbolChanged"
    }]; }
  static get listeners() { return [{
      "name": "jdSymbolSelected",
      "method": "onStockSymbolSelected",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
