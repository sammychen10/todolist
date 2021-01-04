import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import about from './components/pages/about';

import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Do laundry',
        completed: false
      },
      {
        id: 2,
        title: 'Get groceries',
        completed: true
      },
      {
        id: 3,
        title: 'Finish coding project',
        completed: false
      }
    ]
  }

  // Toggles completion to opposite
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Deletes the event
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete}
              delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={about} />
        </div>
      </div>
      </Router>
    );
  }
} 

export default App;
