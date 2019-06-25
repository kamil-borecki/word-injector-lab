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


    form.on('submit', e => {
      e.preventDefault();
      const word = wordInput.val();
      chrome.runtime.sendMessage({
        message: 'word-changed',
        data: {word},
      });
    });
  }

})();
