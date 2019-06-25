(() => {
  chrome.runtime.onMessage.addListener(
    (request) => {
      const {message, data} = request;

      switch (message) {

        case 'word-changed':

          const {word} = data;
          chrome.storage.sync.set({word}, () => {
            chrome.runtime.sendMessage({
              message: 'new-word',
              data: {word},
            });
          });

          break;

      }
    })
})();
