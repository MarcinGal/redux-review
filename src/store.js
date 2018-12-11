import { createStore, combineReducers } from 'redux'


const myData = () => ({
    type: 'FIRST_NAME',
    name: 'marcin'
})

const neighbourData = () => ({
    type: 'FIRST_NAME',
    name: 'zdzichu'
})

const sisterData = () => ({
    type: 'FIRST_NAME',
    name: 'mery'
})

const reducer = combineReducers({
    myData,
    neighbourData,
    sisterData
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store)