(() => {

  let currentTabId;

  chrome.tabs.onActivated.addListener(({tabId}) => {
    currentTabId = tabId;
    reload();
  });

  chrome.runtime.onMessage.addListener(
    (request) => {
      const {message} = request;

      switch (message) {

        case 'word-changed':
          const {word} = request.data;
          chrome.storage.sync.set({word}, () => {
            reload();
            chrome.runtime.sendMessage({
              message: 'new-word',
              data: {word},
            });
          });
          break;
        case 'state-changed':
          const {state} = request.data;
          chrome.storage.sync.set({state}, () => {
            reload();
            chrome.runtime.sendMessage({
              message: 'new-state',
              data: {state},
            });
          });
          break;
      }
    });

  function reload() {
    chrome.tabs.sendMessage(currentTabId, {message: 'reload'});
  }
})();
