import { SET_ENTRIES, ADD_ENTRY, UPDATE_ENTRY, DELETE_ENTRY } from '../actions/entries'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENTRIES:
      return action.entries
    case ADD_ENTRY:
      return [...state, action.entry]
    case UPDATE_ENTRY:
      return state.map(entry => {
        if (entry.id === action.id) {
          return action.habit
        }
        return entry
      })
    case DELETE_ENTRY:
      return state.filter(entry => entry.id !== action.id)
    default:
      return state
  }
}

export default reducer
