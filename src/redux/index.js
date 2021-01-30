import { createStore } from 'redux'
import { combineReducers } from "redux";

// Reducer
function counter(state = { count: 10 }, action) {
    const count = state.count
    switch (action.type) {
      case 'increase':
        return { count: count + 10 }
      default:
        return state
    }
}

function todos(state = { num: 1 }, action) {
    const num = state.num
    switch (action.type) {
      case 'increase':
        return { num: num + 10 }
      default:
        return state
    }
}

const store = createStore(combineReducers({
    todos,
    counter
}))
// const store = createStore(counter)
export default store