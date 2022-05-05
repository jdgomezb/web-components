(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./dist/esm-es5/jd-spinner_3.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"jd_spinner",(function(){return Spinner})),__webpack_require__.d(__webpack_exports__,"jd_stock_finder",(function(){return StockFinder})),__webpack_require__.d(__webpack_exports__,"jd_stock_price",(function(){return StockPrice}));__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm-es5/index-77fcea8f.js"),Spinner=function(){function t(t){Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,t)}return t.prototype.render=function(){return Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"lds-ring"},Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",null),Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",null),Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",null),Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",null))},t}();Spinner.style=":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}.lds-ring{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid var(--purple);border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:var(--purple) transparent transparent transparent}.lds-ring div:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s}@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";var StockFinder=function(){function t(t){Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,t),this.jdSymbolSelected=Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"jdSymbolSelected",7),this.searchResults=[],this.loading=!1}return t.prototype.onFindStocks=function(t){t.preventDefault(),this.fetchStockSymbols(this.stockNameInput.value)},t.prototype.fetchStockSymbols=function(t){var e=this;this.loading=!0;var r="https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(t,"&apikey=").concat("HSDD0H4H2QLMLP98");fetch(r).then((function(t){if(200!==t.status)throw new Error("Failed to fetch stock data");return t.json()})).then((function(t){e.searchResults=t.bestMatches.map((function(t){return{name:t["2. name"],symbol:t["1. symbol"]}})),e.errorMsg=null,e.loading=!1})).catch((function(t){e.errorMsg=t.message,e.loading=!1}))},t.prototype.onSelectSymbol=function(t){this.jdSymbolSelected.emit(t)},t.prototype.render=function(){var t=this,e=Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("ul",null,this.searchResults.map((function(e){return Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("li",{onClick:t.onSelectSymbol.bind(t,e.symbol)},Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("b",null,e.symbol)," ",e.name)})));return this.loading&&(e=Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("jd-spinner",null)),[Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("form",{onSubmit:this.onFindStocks.bind(this)},Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("input",{id:"stock-symbol",ref:function ref(e){return t.stockNameInput=e}}),Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("button",{type:"submit"},"Search Stock Symbol")),e]},t}();StockFinder.style=":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}:host{font-family:sans-serif;border:2px solid var(--purple);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}form input{font:inherit;color:var(--purple);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--purple);background:var(--purple);color:var(--white);cursor:pointer}form button:hover,form button:active{background:var(--light-purple);border-color:var(--light-purple)}form button:disabled{background:var(--light-grey);border-color:var(--light-grey);color:var(--white);cursor:not-allowed}ul{margin:0;padding:0;list-style:none}li{display:grid;grid-template-columns:1fr 2fr;gap:.75rem;margin:0.25rem 0;padding:0.25rem;border-bottom:1px solid var(--light-grey)}li:hover{color:var(--light-purple);cursor:pointer;background-color:var(--lighter-grey)}";var StockPrice=function(){function t(t){Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,t),this.isStockInputValid=!1,this.loading=!1}return t.prototype.stockSymbolChanged=function(t,e){t!==e&&(this.stockInput.value=t,this.fetchStockPrice(t))},t.prototype.hostData=function(){return{class:this.errorMsg?"error":""}},t.prototype.onFetchStockPrice=function(t){t.preventDefault(),this.stockSymbol=this.stockInput.value},t.prototype.fetchStockPrice=function(t){var e=this;this.loading=!0;var r="https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".concat(t,"&apikey=").concat("HSDD0H4H2QLMLP98");fetch(r).then((function(t){if(200!==t.status)throw new Error("Failed to fetch stock data");return t.json()})).then((function(t){if(!t["Global Quote"]["05. price"])throw new Error("Invalid stock symbol");e.currentPrice=+t["Global Quote"]["05. price"],e.errorMsg=null,e.loading=!1})).catch((function(t){e.errorMsg=t.message,e.currentPrice=null,e.loading=!1}))},t.prototype.onUserInput=function(t){this.stockUserInput=t.target.value,this.isStockInputValid=""!==this.stockUserInput.trim(),this.isStockInputValid&&(this.stockSymbol=this.stockUserInput)},t.prototype.onStockSymbolSelected=function(t){console.log("Stock symbol selected:",t.detail),t.detail&&t.detail!==this.stockSymbol&&(this.stockSymbol=t.detail)},t.prototype.componentWillLoad=function(){this.stockSymbol&&(this.stockUserInput=this.stockSymbol,this.isStockInputValid=!0)},t.prototype.componentDidLoad=function(){this.stockSymbol&&this.fetchStockPrice(this.stockSymbol)},t.prototype.componentWillUpdate=function(){},t.prototype.componentDidUpdate=function(){},t.prototype.disconnectedCallback=function(){},t.prototype.__stencil_render=function(){var t=this,e=Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("p",null,"Please enter a symbol");return this.errorMsg&&(e=Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("p",null,this.errorMsg)),this.currentPrice&&(e=Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("p",null,"Current price: $",this.currentPrice)),this.loading&&(e=Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("jd-spinner",null)),[Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("form",{onSubmit:this.onFetchStockPrice.bind(this)},Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("input",{id:"stock-symbol",ref:function ref(e){return t.stockInput=e},value:this.stockUserInput,onInput:this.onUserInput.bind(this)}),Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("button",{type:"submit",disabled:!this.isStockInputValid},"Fetch price")),Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",null,e)]},Object.defineProperty(t.prototype,"el",{get:function get(){return Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function get(){return{stockSymbol:["stockSymbolChanged"]}},enumerable:!1,configurable:!0}),t.prototype.render=function(){return Object(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_77fcea8f_js__WEBPACK_IMPORTED_MODULE_8__.H,this.hostData(),this.__stencil_render())},t}();StockPrice.style=":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}:host{font-family:sans-serif;border:2px solid var(--purple);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:var(--error)}form input{font:inherit;color:var(--purple);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--purple);background:var(--purple);color:var(--white);cursor:pointer}form button:hover,form button:active{background:var(--light-purple);border-color:var(--light-purple)}form button:disabled,form button:disabled:hover,form button:disabled:active{background:var(--light-grey);border:1px solid #9f9f9f;color:#666;cursor:default}"}}]);