import { SET_ACTIVITIES, ADD_ACTIVITY, UPDATE_ACTIVITY, DELETE_ACTIVITY } from '../actions/activities'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return action.activities
    case ADD_ACTIVITY:
      return [...state, action.activity]
    case UPDATE_ACTIVITY:
      return state.map(activity => {
        if (activity.id === action.id) {
          return action.habit
        }
        return activity
      })
    case DELETE_ACTIVITY:
      return state.filter(activity => activity.id !== action.id)
    default:
      return state
  }
}

export default reducer
