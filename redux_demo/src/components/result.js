import React, { Component } from 'react'

class Result extends Component {
    render() {
        return (
            <div>
                增加的值为：{this.props.value}
            </div>
        )
    }
}

export default Result