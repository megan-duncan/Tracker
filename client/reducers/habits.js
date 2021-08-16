import { SET_HABITS, ADD_HABIT, UPDATE_HABIT, DELETE_HABIT } from '../actions/habits'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HABITS:
      return action.habits
    case ADD_HABIT:
      return [...state, action.habit]
    case UPDATE_HABIT:
      return state.map(habit => {
        if (habit.id === action.id) {
          return action.habit
        }
        return habit
      })
    case DELETE_HABIT:
      return state.filter(habit => habit.id !== action.id)
    default:
      return state
  }
}

export default reducer
