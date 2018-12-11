import { createStore, combineReducers } from 'redux'
import { counterReducerName, incCounter, decCounter } from './state/counter'
import { todoReducer, textChangeAction, setFilterAction } from './state/toDo'

const reducer = combineReducers({
    counterReducerName: counterReducerName,
    toDo: todoReducer
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

window.dispatchChangeToDoText = (taskText) => {
    store.dispatch(textChangeAction(taskText))
}

window.dispatchSetToDoFilter = (filterValue) => {
    store.dispatch(setFilterAction(filterValue))
}