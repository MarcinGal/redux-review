const TEXT_CHANGE = 'toDo/TEXT_CHANGE'
const ADD = 'toDo/ADD'
const SET_FILTER = 'toDo/SET_FILTER'

const TASKS_INITIAL_STATE = {
    tasks: [],
    newTaskText: '',
    currentFilter: 'ALL'
}

export const textChangeAction = newValue => ({
    type: TEXT_CHANGE,
    newValue
})


export const setFilterAction = newFilter => {
    const availablefilters = ['ALL', 'COMPLETED', 'UNCOMPLETED']
    if (!availablefilters.includes(newFilter)) {
        throw new Error('Not supported filter!')
    }

    return {
        type: SET_FILTER,
        newFilter
    }
}

export const todoReducer = (state = TASKS_INITIAL_STATE, action) => {
    switch (action.type) {
        case TEXT_CHANGE:
            return {
                ...state,
                newValue: action.newValue
            }
        case SET_FILTER:
            return {
                ...state,
                currentFilter: action.newFilter
            }
        case ADD:
            return {
                ...state,
              tasks: state.tasks.concat({
                  text: state.newTaskText,
                  isCompleted: false
              }),
              newTaskText: ''
            }
        default:
            return state
    }
}