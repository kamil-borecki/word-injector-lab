(() => {
  chrome.runtime.onMessage.addListener(
    (request) => {
      const {message} = request;

      switch (message) {

        case 'word-changed':

          const {word} = request.data;
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
