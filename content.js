(() => {

  makeRequest();

  function makeRequest() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
      });
  }

})();
