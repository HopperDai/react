import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from './components/counter'
import Result from './components/result'

// action
const increaseAction = { type: 'increase' }

// 外部 -> UI
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// UI -> 外部
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

const CountCmp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

const ResultCmp = connect(
  mapStateToProps
)(Result)

class App extends Component {
  render() {
    return (
      <div>
        <ResultCmp />
        <CountCmp />
      </div>
    );
  }
}

export default App;
