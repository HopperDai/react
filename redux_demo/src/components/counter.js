import React, { Component } from 'react'

class Counter extends Component {
    
    render() {
        return (
            <div>
                <input type = 'button' value = '增加' onClick = {this.props.onIncreaseClick.bind(this)} />
            </div>
        )
    }
}

export default Counter