(() => {
  let wordInput;

  $(document).ready(() => {
    init();
  });


  function init() {
    const form = $('#form').first();
    wordInput = $('#word-input').first();

    getWordFromStorage();


    form.on('submit', e => {
      e.preventDefault();
      const word = wordInput.val();
      chrome.runtime.sendMessage({
        message: 'word-changed',
        data: {word},
      });
    });

    chrome.runtime.onMessage.addListener(
      request => {
        const {message} = request;

        switch (message) {
          case 'new-word':
            getWordFromStorage();
            break;
        }
      })
  }

  function getWordFromStorage() {
    chrome.storage.sync.get(({word}) => {
      wordInput.val(word || '');
    });
  }


})();
