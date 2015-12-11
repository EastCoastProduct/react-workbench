var axios = require('axios');

function getAll() {
  return axios.get('http://localhost:3000/todos/');
}

var helpers = {
  getTodos: function() {
    return  axios.get('http://localhost:3000/todos/')
    .then(function (response) {
      return {
        todos: response.data
      }
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}

module.exports = helpers;
