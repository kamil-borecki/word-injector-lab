(async () => {
  const src = chrome.extension.getURL('lib/injector.js');
  const injector = await import(src);

  chrome.storage.sync.get(({word, state}) => {
    if (!word || !state) {
      return;
    }
    injector.injectWord(document.body, word)
  })
})();
