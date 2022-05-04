import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    showStockFinder: false
  };

  render() {
    let showStockFinder = <button onClick={() => this.setState({showStockFinder: true})}>Load finder component</button>;
    if (this.state.showStockFinder) {
      showStockFinder = <jd-stock-finder></jd-stock-finder>;
    }
    return (
      <div className="App">
        <jd-stock-price></jd-stock-price>

        {showStockFinder}
      </div>
    );
  }
}

export default App;
