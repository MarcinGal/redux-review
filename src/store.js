import { createStore, combineReducers } from 'redux'
import { counterReducerName, incCounter, decCounter } from './state/counter'

const reducer = combineReducers({
    counterReducerName
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.dispatchIncCounter = () => {
    store.dispatch(incCounter())
}

window.dispatchDecCounter = () => {
    store.dispatch(decCounter())
}
