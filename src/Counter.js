import React from 'react'
import { connect } from 'react-redux'


const onClickIncHandler = () => {
    alert('Man! You clicked +')
}

const onClickDecHandler = () => {
    alert('Man! You clicked -')
}


const Counter = () => (
    <div>
        <h1>Counter</h1>
        <button
            onClick={onClickIncHandler}
        >+</button>
        <button
            onClick={onClickDecHandler}
        >-</button>
    </div>
)

const mapStateToProps = state => ({
    _number: state.counter.number
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

// export default Counter