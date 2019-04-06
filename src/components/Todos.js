import React, { Component } from 'react'

class Todos extends Component {
    render (){
        const { children } = this.props;
        return (
            <div className="todos">
                {children}
            </div>
        )
    }
}

export default Todos