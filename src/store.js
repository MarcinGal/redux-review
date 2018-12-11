import { createStore, combineReducers } from 'redux'
import { counterReducerName, INC, DEC } from './state/counter'

const reducer = combineReducers({
    counterReducerName
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


const incCounter = () => ({
    type: INC
})

const decCounter = () => ({
    type: DEC
})

window.dispatchIncCounter = () => {
    store.dispatch(incCounter())
}

window.dispatchDecCounter = () => {
    store.dispatch(decCounter())}
