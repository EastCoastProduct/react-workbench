var React = require('react');
var helpers = require('../helpers/helpers.js');

var TestComponent = React.createClass({
  getInitialState: function() {
    return {todos: []}
  },

  componentDidMount: function() {
    helpers.getTodos()
      .then(function (data) {
        this.setState({
          todos: data.todos.todos
        });
      }.bind(this));
  },

  setItemAsFinished: function() {

  },

  addNewItem: function() {

  },

  renderAllTodos: function() {
    var items = this.state.todos;

    return(<div>
      {items.map(function(item) {
        return <div><input type='checkbox'
          onChange={this.setItemAsFinished}/>{item.name}</div>;
      })}
    </div>);
  },

  render: function() {
    return (
      <div>
        <h1>Todo Example</h1>
        <form onSubmit={this.addNewItem}>
          <input type='text' value='' placeholder='What needs to be done' />
          <button type='submit'>Add new</button>
        </form>
        <div>{this.renderAllTodos()}</div>
      </div>
    );
  }
});

module.exports = TestComponent;
