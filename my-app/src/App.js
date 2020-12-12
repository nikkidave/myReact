
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.setState({
      todos: res.data
    }))
  }
  markComplete = (id) => {
    this.setState({
     todos: this.state.todos.map(todo => {
       if(todo.id === id){
          todo.completed = !todo.completed
       }
       return todo;
     }) 
    });
  }
  deleteFn = (id) => {
    console.log(id);
    axios.get(`https://jsonplaceholder.typicode.com/todos?${id}`)
    .then(res => this.setState({
      todos: [...this.state.todos.filter(todo => todo.id!== id)]
    }))
    /*this.setState({
      //spread operator : makes a copy
      //axios.delete('url', id)
      todos: [...this.state.todos.filter(todo => todo.id!== id)]
    });*/
  }

  addTodo = (title) =>{
    /*const newTodo = {
      id:4,
      title,
      completed: false
    }*/
    axios.get('https://jsonplaceholder.typicode.com/todos', {
      title,
      completeted: false
    })
    .then(res => this.setState({
      todos: res.data
    }))
    console.log(title);
    /*this.setState({
      todos:[...this.state.todos, newTodo]
    })*/
  }
  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header  />
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos ={this.state.todos} deleteFn={this.deleteFn} 
          markComplete={this.markComplete}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
