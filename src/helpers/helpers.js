var axios = require('axios');

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
  },

  addNewTodo: function(name) {
    return axios.post('http://localhost:3000/todos/', {
      name: name
    })
    .then(function (response) {
      return {
        todos: response.data
      }
    })
    .catch(function (response) {
      console.log(response);
    });
  },

  setTodoAsFinished: function(id, name) {
    return axios.post('http://localhost:3000/todos/' + id, {
      name: name,
      finished: true
    })
    .then(function (response) {
      return {
        todos: response.data
      }
    })
    .catch(function (response) {
      console.log(response);
    });
  },

  setTodoAsNotFinished: function(id, name) {
    return axios.post('http://localhost:3000/todos/' + id, {
      name: name,
      finished: false
    })
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
