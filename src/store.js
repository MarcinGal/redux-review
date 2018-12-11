import { createStore, combineReducers } from 'redux'

const FIRST_ACTION_INITIAL_STATE = {
    firstAction: false,

}

const COUNTER_INITIAL_STATE = {
    counter: 0
}

const INC = 'INC'
const DEC = 'DEC'

const counterReducerName = (state = COUNTER_INITIAL_STATE, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DEC:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

const firstActionReducerName = (state = FIRST_ACTION_INITIAL_STATE, aciton) => {
    if (aciton.type === 'FIRST_ACTION') {
        return {
            ...state,
            firstAction: true
        }
    }
    return state
}

const reducer = combineReducers({
    firstActionReducerName,
    counterReducerName
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const FIRST_ACTION = 'FIRST_ACTION'

const firstAction = () => ({
    type: FIRST_ACTION
})

const incCounter = () => ({
    type: INC
})

const decCounter = () => ({
    type: DEC
})


window.dispatchFirstAction = () => {
    store.dispatch(firstAction())
}

window.dispatchIncCounter = () => {
    store.dispatch(incCounter())
}

window.dispatchDecCounter = () => {
    store.dispatch(decCounter())}
