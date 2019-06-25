(() => {

  let wordInput;
  $(document).ready(() => {
    init();
  });


  function init() {
    const form = $('#form').first();
    overlay = $('.overlay').first();
    wordInput = $('input').first();

    $('.options-link').each((i, e) => {
      e.href = chrome.extension.getURL('options/index.html')
    });

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
