import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

class TodoWrite extends Component {
    render (){
        const { title, text, onChangeTitle, onChangeText, onKeyPress, onAdd } = this.props;
        return (
            <Container>
                <br/>
                <Form.Control
                    placeholder="TITLE"
                    value={title}
                    onChange={onChangeTitle}
                    onKeyPress={onKeyPress}
                />
                <br/>
                <Form.Control 
                    as="textarea" 
                    rows="3" 
                    placeholder="TEXT"
                    value={text} 
                    onChange={onChangeText}
                />
                <br/>
                <Button variant="primary" size="lg" block onClick={onAdd}>추가</Button>
                <br/>
            </Container>
        )
    }
}

export default TodoWrite