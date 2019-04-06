import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Todos from './components/Todos'
import TodoWrite from './components/TodoWrite'
import TodoList from './components/TodoList'

class App extends Component {
  id = '3';
  state = {
    inputTitle: '',
    inputText: '',
    todos: [
      { id: 0, title: 'title 1', text: 'todo 1', checked: false },
      { id: 1, title: 'title 2', text: 'todo 2', checked: true },
      { id: 2, title: 'title 3', text: 'todo 3', checked: false },
    ]
  }

  onChangeTitleEvent = (e) => {
    this.setState({
      inputTitle: e.target.value,
    })
  }

  onChangeTextEvent = (e) => {
    this.setState({
      inputText: e.target.value,
    })
  }

  onKeyPressEvent = (e) => {
    if(e.key === 'Enter'){
      this.onAddEvent();
    }
  }

  onAddEvent = () => {
    const { inputTitle, inputText, todos } = this.state;
    if(inputTitle === '') return alert('Empty title');
    if(inputText === '') return alert('Empty text');
    this.setState({
      inputTitle: '',
      inputText: '',
      todos: todos.concat({
        id: this.id++,
        title: inputTitle,
        text: inputText,
        checked: false
      })
    });
  }

  onCheckedEvent = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todos => todos.id === id);
    const selected = todos[index];
    const replaceTodos = [...todos];
    replaceTodos[index] = {
      ...selected,
      checked: !selected.checked
    }
    this.setState({
      todos: replaceTodos
    })
  }

  onRemoveEvent = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter( todo => todo.id !== id)
    })
  }

  render() {
    const { inputTitle, inputText, todos } = this.state;
    const {
      onChangeTitleEvent,
      onChangeTextEvent,
      onKeyPressEvent,
      onAddEvent,
      onCheckedEvent,
      onRemoveEvent
    } = this;

    return (
      <div className="App">
        <Header />
        <Todos>
          <TodoWrite 
            title={inputTitle} 
            text={inputText} 
            onChangeTitle={onChangeTitleEvent} 
            onChangeText={onChangeTextEvent}
            onKeyPress={onKeyPressEvent} 
            onAdd={onAddEvent} 
          />
          <TodoList 
            todos={todos} 
            onChecked={onCheckedEvent} 
            onRemove={onRemoveEvent} 
          />
        </Todos>
        
      </div>
    );
  }
}

export default App;
