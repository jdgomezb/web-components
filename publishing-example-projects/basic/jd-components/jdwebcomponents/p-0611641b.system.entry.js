System.register(["./p-9cd5f3ba.system.js"],(function(t){"use strict";var r,e,o,i,n;return{setters:[function(t){r=t.r;e=t.h;o=t.c;i=t.g;n=t.H}],execute:function(){var s=":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}.lds-ring{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid var(--purple);border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:var(--purple) transparent transparent transparent}.lds-ring div:nth-child(1){-webkit-animation-delay:-0.45s;animation-delay:-0.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-0.15s;animation-delay:-0.15s}@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";var l=t("jd_spinner",function(){function t(t){r(this,t)}t.prototype.render=function(){return e("div",{class:"lds-ring"},e("div",null),e("div",null),e("div",null),e("div",null))};return t}());l.style=s;var a="HSDD0H4H2QLMLP98";var c=":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}:host{font-family:sans-serif;border:2px solid var(--purple);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}form input{font:inherit;color:var(--purple);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form input:focus,form button:focus{outline:none}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--purple);background:var(--purple);color:var(--white);cursor:pointer}form button:hover,form button:active{background:var(--light-purple);border-color:var(--light-purple)}form button:disabled{background:var(--light-grey);border-color:var(--light-grey);color:var(--white);cursor:not-allowed}ul{margin:0;padding:0;list-style:none}li{display:grid;grid-template-columns:1fr 2fr;gap:.75rem;margin:0.25rem 0;padding:0.25rem;border-bottom:1px solid var(--light-grey)}li:hover{color:var(--light-purple);cursor:pointer;background-color:var(--lighter-grey)}";var u=t("jd_stock_finder",function(){function t(t){r(this,t);this.jdSymbolSelected=o(this,"jdSymbolSelected",7);this.searchResults=[];this.loading=false}t.prototype.onFindStocks=function(t){t.preventDefault();this.fetchStockSymbols(this.stockNameInput.value)};t.prototype.fetchStockSymbols=function(t){var r=this;this.loading=true;var e="https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(t,"&apikey=").concat(a);fetch(e).then((function(t){if(t.status!==200){throw new Error("Failed to fetch stock data")}return t.json()})).then((function(t){r.searchResults=t["bestMatches"].map((function(t){return{name:t["2. name"],symbol:t["1. symbol"]}}));r.errorMsg=null;r.loading=false})).catch((function(t){r.errorMsg=t.message;r.loading=false}))};t.prototype.onSelectSymbol=function(t){this.jdSymbolSelected.emit(t)};t.prototype.render=function(){var t=this;var r=e("ul",null,this.searchResults.map((function(r){return e("li",{onClick:t.onSelectSymbol.bind(t,r.symbol)},e("b",null,r.symbol)," ",r.name)})));if(this.loading){r=e("jd-spinner",null)}return[e("form",{onSubmit:this.onFindStocks.bind(this)},e("input",{id:"stock-symbol",ref:function(r){return t.stockNameInput=r}}),e("button",{type:"submit"},"Search Stock Symbol")),r]};return t}());u.style=c;var d=":host{--purple:#3b013b;--light-purple:#750175;--green:#829e28;--white:#fff;--dark-grey:#444;--grey:#999;--light-grey:#ccc;--lighter-grey:#efefef;--lightest-grey:#f3f3f3;--lightning-grey:#fefefe;--error:red}:host{font-family:sans-serif;border:2px solid var(--purple);margin:2rem;padding:1rem;display:block;width:20rem;max-width:100%}:host(.error){border-color:var(--error)}form input{font:inherit;color:var(--purple);padding:0.1rem 0.25rem;display:block;margin-bottom:0.5rem}form button{font:inherit;padding:0.25rem 0.5rem;border:1px solid var(--purple);background:var(--purple);color:var(--white);cursor:pointer}form button:hover,form button:active{background:var(--light-purple);border-color:var(--light-purple)}form button:disabled,form button:disabled:hover,form button:disabled:active{background:var(--light-grey);border:1px solid #9f9f9f;color:#666;cursor:default}";var p=t("jd_stock_price",function(){function t(t){r(this,t);this.isStockInputValid=false;this.loading=false}t.prototype.stockSymbolChanged=function(t,r){if(t!==r){this.stockInput.value=t;this.fetchStockPrice(t)}};t.prototype.hostData=function(){return{class:this.errorMsg?"error":""}};t.prototype.onFetchStockPrice=function(t){t.preventDefault();this.stockSymbol=this.stockInput.value};t.prototype.fetchStockPrice=function(t){var r=this;this.loading=true;var e="https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=".concat(t,"&apikey=").concat(a);fetch(e).then((function(t){if(t.status!==200){throw new Error("Failed to fetch stock data")}return t.json()})).then((function(t){if(!t["Global Quote"]["05. price"]){throw new Error("Invalid stock symbol")}r.currentPrice=+t["Global Quote"]["05. price"];r.errorMsg=null;r.loading=false})).catch((function(t){r.errorMsg=t.message;r.currentPrice=null;r.loading=false}))};t.prototype.onUserInput=function(t){this.stockUserInput=t.target.value;this.isStockInputValid=this.stockUserInput.trim()!=="";if(this.isStockInputValid){this.stockSymbol=this.stockUserInput}};t.prototype.onStockSymbolSelected=function(t){console.log("Stock symbol selected:",t.detail);if(t.detail&&t.detail!==this.stockSymbol){this.stockSymbol=t.detail}};t.prototype.componentWillLoad=function(){if(this.stockSymbol){this.stockUserInput=this.stockSymbol;this.isStockInputValid=true}};t.prototype.componentDidLoad=function(){if(this.stockSymbol){this.fetchStockPrice(this.stockSymbol)}};t.prototype.componentWillUpdate=function(){};t.prototype.componentDidUpdate=function(){};t.prototype.disconnectedCallback=function(){};t.prototype.__stencil_render=function(){var t=this;var r=e("p",null,"Please enter a symbol");if(this.errorMsg){r=e("p",null,this.errorMsg)}if(this.currentPrice){r=e("p",null,"Current price: $",this.currentPrice)}if(this.loading){r=e("jd-spinner",null)}return[e("form",{onSubmit:this.onFetchStockPrice.bind(this)},e("input",{id:"stock-symbol",ref:function(r){return t.stockInput=r},value:this.stockUserInput,onInput:this.onUserInput.bind(this)}),e("button",{type:"submit",disabled:!this.isStockInputValid},"Fetch price")),e("div",null,r)]};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{stockSymbol:["stockSymbolChanged"]}},enumerable:false,configurable:true});t.prototype.render=function(){return e(n,this.hostData(),this.__stencil_render())};return t}());p.style=d}}}));