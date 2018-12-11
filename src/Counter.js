import React from 'react'

const Counter = () => (
    <div>
        <h1>Counter</h1>
        <button
        onClick={() => alert('you clicked +')}
        >+</button>
        <button
        onClick={() => alert('you clicked -')}
        >-</button>
    </div>
)

export default Counter