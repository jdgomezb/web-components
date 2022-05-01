import { p as promiseResolve, b as bootstrapLazy } from './index-77fcea8f.js';

/*
 Stencil Client Patch Browser v2.15.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["jd-side-drawer",[[1,"jd-side-drawer",{"headerTitle":[513,"header-title"],"open":[1540],"showContactInfo":[32],"openMe":[64],"closeMe":[64]}]]],["jd-spinner_3",[[1,"jd-stock-finder",{"errorMsg":[32],"searchResults":[32],"loading":[32]}],[1,"jd-stock-price",{"stockSymbol":[1537,"stock-symbol"],"currentPrice":[32],"stockUserInput":[32],"isStockInputValid":[32],"errorMsg":[32],"loading":[32]},[[16,"jdSymbolSelected","onStockSymbolSelected"]]],[1,"jd-spinner"]]]], options);
});
