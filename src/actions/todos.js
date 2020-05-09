//we export them so that we can import them in Reducer folder
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addTodoAction (todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

function removeTodoAction (id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

function toggleTodoAction (id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}