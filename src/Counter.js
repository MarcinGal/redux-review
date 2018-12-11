import React from 'react'
import { connect } from 'react-redux'
import { incCounter, decCounter } from './state/counter'

const Counter = (props) => (
    <div>
        <h1>Counter: {props._counter}</h1>
        <button
            onClick={props._incCounter}
        >+</button>
        <button
            onClick={props._decCounter}
        >-</button>
    </div>
)

const mapStateToProps = state => ({
    _counter: state.counterReducerName.counter
})

const mapDispatchToProps = dispatch => ({
    _incCounter: () => dispatch(incCounter()),
    _decCounter: () => dispatch(decCounter())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
