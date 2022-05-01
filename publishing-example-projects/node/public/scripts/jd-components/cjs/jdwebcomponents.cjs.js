'use strict';

const index = require('./index-de9667f2.js');

/*
 Stencil Client Patch Browser v2.15.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('jdwebcomponents.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["jd-side-drawer.cjs",[[1,"jd-side-drawer",{"headerTitle":[513,"header-title"],"open":[1540],"showContactInfo":[32],"openMe":[64],"closeMe":[64]}]]],["jd-spinner_3.cjs",[[1,"jd-stock-finder",{"errorMsg":[32],"searchResults":[32],"loading":[32]}],[1,"jd-stock-price",{"stockSymbol":[1537,"stock-symbol"],"currentPrice":[32],"stockUserInput":[32],"isStockInputValid":[32],"errorMsg":[32],"loading":[32]},[[16,"jdSymbolSelected","onStockSymbolSelected"]]],[1,"jd-spinner"]]]], options);
});
