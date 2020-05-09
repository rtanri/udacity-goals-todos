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


function handleAddTodo (name, cb){
    return (dispatch) => {
        return API.saveTodo(name)
        .then((todo) => {
          dispatch(addTodoAction(todo))
          cb()
        })
        .catch(()=> {
          alert('Error in adding todo list, try again')
          // this.input.value = '' 
        })
    }
  }

function handleDeleteTodo (todo) {
    return (dispatch) => {
        dispatch(removeTodoAction(todo.id)) 

        return API.deleteTodo(todo.id) 
        .catch(() => {
            dispatch(addTodoAction(todo))
            alert('An error occurred, try delete again')
        })
    }
}

function handleToggle (id) {
    return (dispatch) => {
        dispatch(toggleTodoAction(id))

        return API.saveTodoToggle(id)
        .catch(() => {
            dispatch(toggleTodoAction(id))
            alert('An error in toggling occured, try again')
        })
    }
}