const defaultState = []

const ADD ='[TASKS] ADD'
const REMOVE='[TASKS] REMOVE'
const CLEAR='[TASKS] CLEAR'

export const addAction = (payload) => ({type: ADD, payload})
export const removeAction = (payload) => ({type: REMOVE, payload})
export const clearAction = () => ({type: CLEAR})

export const tasksReducer = (state=defaultState, action) => {
    if (action.type === ADD) {
        return [...state, {id: Date.now(),  ...action.payload}]
    } else if (action.type === REMOVE) {
        return state.filter(({id}) => id !== action.payload)
    } else if (action.type === CLEAR) {
        return []
    }
    
    return state
}