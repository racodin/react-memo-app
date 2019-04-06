import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { Container, CardColumns } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

class TodoList extends Component {

    render (){
        const { todos, onChecked, onRemove } = this.props;
        
        const todoList = todos.map((todo) => (
            <TodoItem
                key={todo.id}
                id={todo.id} 
                title={todo.title} 
                text={todo.text} 
                checked={todo.checked} 
                onChecked={onChecked}
                onRemove={onRemove}
            />
        ));
        return (
            <Container>
                <CardColumns>
                    {todoList}
                </CardColumns>
            </Container>
        )
    }
}

export default TodoList 