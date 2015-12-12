var React = require('react');
var helpers = require('../helpers/helpers.js');

var TestComponent = React.createClass({
  getInitialState: function() {
    return {todos: [], newTodo: ''}
  },

  componentDidMount: function() {
    helpers.getTodos()
      .then(function (data) {
        this.setState({
          todos: data.todos.todos
        });
      }.bind(this));
  },

  updateNewTodo: function(e) {
    this.setState({newTodo: e.target.value});
  },

  setItemAsFinished: function(e) {
    e.preventDefault();

    var isFinished = e.target.checked;

    if (isFinished) {
      helpers.setTodoAsFinished(e.target.id, e.target.name)
      .then(function (data) {
          helpers.getTodos()
          .then(function (data) {
            this.setState({
              todos: data.todos.todos,
            });
          }.bind(this));
      }.bind(this));
    } else {
      helpers.setTodoAsNotFinished(e.target.id, e.target.name)
      .then(function (data) {
          helpers.getTodos()
          .then(function (data) {
            this.setState({
              todos: data.todos.todos,
            });
          }.bind(this));
      }.bind(this));
    }
  },

  addNewItem: function(e) {
    e.preventDefault();
    helpers.addNewTodo(this.state.newTodo)
      .then(function () {
        helpers.getTodos()
        .then(function (data) {
          this.setState({
            todos: data.todos.todos,
            newTodo: ''
          });
        }.bind(this));
      }.bind(this));
  },

  renderAllTodos: function() {
    var items = this.state.todos;

    return(<div>
      {items.map(function(item) {
        return <div className='list-item'>
          <input className='checkbox' type='checkbox' checked={item.finished}
            id={item._id} name={item.name} onChange={this.setItemAsFinished}/>
            {item.name}</div>;
      }.bind(this))}
    </div>);
  },

  render: function() {
    return (
      <div className='container'>
        <h1>Todo Example</h1>
        <form onSubmit={this.addNewItem}>
          <input className='main-input' type='text'
            placeholder='What needs to be done'
            value={this.state.newTodo} onChange={this.updateNewTodo}/>
          <button type='submit' className='main-button'>
            <i className='fa fa-pencil'></i>
          </button>
        </form>
        <div className='list'>{this.renderAllTodos()}</div>
      </div>
    );
  }
});

module.exports = TestComponent;
