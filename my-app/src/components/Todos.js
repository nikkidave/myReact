
import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
  markComplete = event => {
    console.log(this.props)
  }
  render(){
      console.log(this.props.todos)
    return (this.props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete}/>
    )));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;
