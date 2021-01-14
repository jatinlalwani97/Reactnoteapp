// import { act } from "react-dom/test-utils"

export default (state = {}, action) => {
    console.log(action, state)
    switch (action.type) {
        case 'ADD_TODO':
            let date = Date.now()
            action.payload.id = date
            state.todo[date] = action.payload
            var data = JSON.stringify(state.todo)
            localStorage.setItem('todos', data);
            return state
        case 'EDIT_TODO':
            var id = action.payload.id
            state.todo[id] = action.payload
            var data = JSON.stringify(state.todo)
            localStorage.setItem('todos', data);
            return state

        case 'DELETE_TODO':
            delete state.todo[action.payload.id]
            // state.todo = {}
            var data = JSON.stringify(state.todo)
            var x = Object.assign({} ,state);
            state = x
            localStorage.setItem('todos', data);
            return state

        default:
            return state
    }
}