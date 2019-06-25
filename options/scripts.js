(() => {
  let wordInput;

  $(document).ready(() => {
    init();
  });


  function init() {
    const form = $('#form').first();
    wordInput = $('#word-input').first();
    stateInput = $('#state-input').first();

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
