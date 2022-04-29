import { Component, Element, h, Listen, Prop, State, Watch } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'jd-stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  stockInput: HTMLInputElement;

  @Element() el: HTMLElement;

  @State() currentPrice: number;
  @State() stockUserInput: string;
  @State() isStockInputValid = false;
  @State() errorMsg: string;
  @State() loading = false;

  @Prop({ mutable: true, reflect: true}) stockSymbol: string;

  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
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

  onFetchStockPrice(event: Event) {
    event.preventDefault();

    // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
    this.stockSymbol = this.stockInput.value
    // this.fetchStockPrice(this.stockSymbol);
  }

  fetchStockPrice(stockSymbol: string) {
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

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    this.isStockInputValid = (this.stockUserInput.trim() !== '');
    if (this.isStockInputValid) {
      this.stockSymbol = this.stockUserInput;
    }
  }

  @Listen('jdSymbolSelected', { target: 'body' })
  onStockSymbolSelected(event: CustomEvent) {
    console.log('Stock symbol selected:', event.detail);
    if(event.detail && event.detail !== this.stockSymbol) {
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
    if(this.stockSymbol) {
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  componentWillUpdate() {} // Run before render. Fired because state changed.

  componentDidUpdate() {} // Run after render.

  // componentDidUnload() {} // Run when removed from DOM. Clean up here intervals.
  disconnectedCallback() {} // Replaced componentDidUnload in Stencil 2

  render() {
    let dataContent = <p>Please enter a symbol</p>;
    if (this.errorMsg) {
      dataContent = <p>{this.errorMsg}</p>
    }
    if (this.currentPrice) {
      dataContent = <p>Current price: ${this.currentPrice}</p>;
    }
    if (this.loading) {
      dataContent = <jd-spinner />;
    }

    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input
          id="stock-symbol"
          ref={el => this.stockInput = el}
          value={this.stockUserInput}
          onInput={this.onUserInput.bind(this)}
        />
        <button
          type="submit"
          disabled={!this.isStockInputValid}
        >
          Fetch price</button>
      </form>,
      <div>
        {dataContent}
      </div>
    ];
  }

}
