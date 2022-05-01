export declare class StockPrice {
  stockInput: HTMLInputElement;
  el: HTMLElement;
  currentPrice: number;
  stockUserInput: string;
  isStockInputValid: boolean;
  errorMsg: string;
  loading: boolean;
  stockSymbol: string;
  stockSymbolChanged(newValue: string, oldValue: string): void;
  hostData(): {
    class: string;
  };
  onFetchStockPrice(event: Event): void;
  fetchStockPrice(stockSymbol: string): void;
  onUserInput(event: Event): void;
  onStockSymbolSelected(event: CustomEvent): void;
  /**
   * First life cycle hook
   * All props are passed to the component
   * Here we can set the initial state of variables. NOT in componentDidLoad
   */
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentWillUpdate(): void;
  componentDidUpdate(): void;
  disconnectedCallback(): void;
  render(): any[];
}
