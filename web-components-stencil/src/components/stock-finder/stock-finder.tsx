import type { EventEmitter } from '@stencil/core';
import { Component, Event, h, State } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'jd-stock-finder',
  styleUrl: 'stock-finder.css',
  shadow: true,
})
export class StockFinder {
  stockNameInput: HTMLInputElement;

  @Event({ bubbles: true, composed: true })
  jdSymbolSelected: EventEmitter<string>;

  @State() errorMsg: string;
  @State() searchResults: { symbol: string, name: string }[] = [];
  @State() loading = false;

  onFindStocks(event: Event) {
    event.preventDefault();
    // console.log(this.stockNameInput.value);
    this.fetchStockSymbols(this.stockNameInput.value);
  }

  fetchStockSymbols(stockSymbol: string) {
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

  onSelectSymbol(symbol: string) {
    this.jdSymbolSelected.emit(symbol);
  }

  render() {
    let content = (
      <ul>
        {this.searchResults.map(result => (
          <li onClick={this.onSelectSymbol.bind(this, result.symbol)}><b>{result.symbol}</b> {result.name}</li>
        ))}
      </ul>
    );
    if (this.loading) {
      content = <jd-spinner />;
    }

    return [
      <form onSubmit={this.onFindStocks.bind(this)}>
        <input
          id="stock-symbol"
          ref={el => this.stockNameInput = el}
        />
        <button
          type="submit"
        >
          Search Stock Symbol</button>
      </form>,
      content
    ];
  }

}
