import { combineReducers, createStore } from 'redux'
import { userReducer } from './reducer/userReducer'
import { tasksReducer } from './reducer/tasksReducer'

const rootReducer = combineReducers({    
    users: userReducer,
    tasks: tasksReducer
    })

export const store = createStore(rootReducer)