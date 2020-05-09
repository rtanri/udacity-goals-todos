import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

function addGoal (goal) {
    return {
      type: ADD_GOAL,
      goal,
    }
  }

function removeGoal (id) {
    return {
      type: REMOVE_GOAL,
      id,
    }
}

//we export syncronous action item because we use this other components
export function handleAddGoal(name, cb){
    return (dispatch) => {
      return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal))
        cb() //callback function that is passed as 2nd argument
      })
      .catch(() => { alert('Error in adding goal, try again')})
    }
}
  

export function handleDeleteGoal(goal){
    return (dispatch) => {
      dispatch(removeGoal(goal.id))

        return API.deleteGoal (goal.id)
          .catch(()=> {
            dispatch(addGoal(goal))
            alert('An error is occurred, try again')
          })
    }
}
