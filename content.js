(async () => {
  const src = chrome.extension.getURL('lib/injector.js');
  const injector = await import(src);
  console.log(injector.injectWord(document.body, 'INJECTOR'));
})();
