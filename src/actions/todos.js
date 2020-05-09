//we export them so that we can import them in Reducer folder
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addTodo (todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

function removeTodo (id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

function toggleTodo (id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}


function handleAddTodo (name, cb){
    return (dispatch) => {
        return API.saveTodo(name)
        .then((todo) => {
          dispatch(addTodo(todo))
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
        dispatch(removeTodo(todo.id)) 

        return API.deleteTodo(todo.id) 
        .catch(() => {
            dispatch(addTodo(todo))
            alert('An error occurred, try delete again')
        })
    }
}

function handleToggle (id) {
    return (dispatch) => {
        dispatch(toggleTodo(id))

        return API.saveTodoToggle(id)
        .catch(() => {
            dispatch(toggleTodo(id))
            alert('An error in toggling occured, try again')
        })
    }
}