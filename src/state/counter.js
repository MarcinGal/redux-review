

const COUNTER_INITIAL_STATE = {
    counter: 0
}

export const INC = 'INC'
export const DEC = 'DEC'

export const counterReducerName = (state = COUNTER_INITIAL_STATE, action) => {
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
