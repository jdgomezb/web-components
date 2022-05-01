import { Component, Event, h, State } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';
export class StockFinder {
  constructor() {
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
    let content = (h("ul", null, this.searchResults.map(result => (h("li", { onClick: this.onSelectSymbol.bind(this, result.symbol) },
      h("b", null, result.symbol),
      " ",
      result.name)))));
    if (this.loading) {
      content = h("jd-spinner", null);
    }
    return [
      h("form", { onSubmit: this.onFindStocks.bind(this) },
        h("input", { id: "stock-symbol", ref: el => this.stockNameInput = el }),
        h("button", { type: "submit" }, "Search Stock Symbol")),
      content
    ];
  }
  static get is() { return "jd-stock-finder"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["stock-finder.css"]
  }; }
  static get styleUrls() { return {
    "$": ["stock-finder.css"]
  }; }
  static get states() { return {
    "errorMsg": {},
    "searchResults": {},
    "loading": {}
  }; }
  static get events() { return [{
      "method": "jdSymbolSelected",
      "name": "jdSymbolSelected",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
