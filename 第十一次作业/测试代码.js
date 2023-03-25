const ajax = require('my-ajax-for-redrock');
ajax('https://jsonplaceholder.typicode.com/todos/1', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(function(response) {
  console.log(response);
})
.catch(function(error) {
  console.error(error);
});