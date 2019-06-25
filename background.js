(() => {
  chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
      const {message} = request;
      switch (message) {

        case 'make-request':
          fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => resp.json())
            .then(resp => {
              sendResponse(resp);
            });
          break;
      }

      return true;
    });
})();
