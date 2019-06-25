(() => {

  makeRequest();

  function makeRequest() {
    chrome.runtime.sendMessage({
      message: 'make-request',
    }, (response) => {
      console.log(response);
    });
  }

})();
