import type { EventEmitter } from '../../stencil-public-runtime';
export declare class StockFinder {
  stockNameInput: HTMLInputElement;
  jdSymbolSelected: EventEmitter<string>;
  errorMsg: string;
  searchResults: {
    symbol: string;
    name: string;
  }[];
  loading: boolean;
  onFindStocks(event: Event): void;
  fetchStockSymbols(stockSymbol: string): void;
  onSelectSymbol(symbol: string): void;
  render(): any[];
}
