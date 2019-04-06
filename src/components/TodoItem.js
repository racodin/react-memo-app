import React, { Component } from 'react'
import { Card, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

class TodoItem extends Component {
    
    render() {
        const { id, title, text, checked, onChecked, onRemove } = this.props;
        return (
            <Card className={checked ? 'complete' : ''}>
                <Card.Body>
                    <Form.Check 
                        inline 
                        label='완료' 
                        type='checkbox' 
                        id={`checkbox-${id}`} 
                        onClick={() => onChecked(id)}
                        defaultChecked={checked ? 'checked' : ''}
                    />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button 
                        variant="danger"
                        onClick={() => onRemove(id)}
                    >삭제</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default TodoItem