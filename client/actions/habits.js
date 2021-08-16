import { fetchHabits, addHabit, deleteHabit, updateHabit } from '../apis/habits'

export const SET_HABITS = 'SET_HABITS'
export const ADD_HABIT = 'ADD_HABIT'
export const UPDATE_HABIT = 'UPDATE_HABIT'
export const DELETE_HABIT = 'DELETE_HABIT'

const setHabits = (habits) => {
  return {
    type: SET_HABITS,
    habits
  }
}

export const getHabits = () => {
  return dispatch => {
    return fetchHabits()
      .then(habits => {
        return dispatch(setHabits(habits))
      })
  }
}

const addHabitToStore = (habit) => {
  return {
    type: ADD_HABIT,
    habit
  }
}

export const createHabit = (habit) => {
  return dispatch => {
    return addHabit(habit)
      .then(habit => {
        return dispatch(addHabitToStore(habit))
      })
  }
}

const updateHabitInStore = (id, habit) => {
  return {
    type: UPDATE_HABIT,
    id,
    habit
  }
}

export const updateHabitAction = (habit) => {
  return dispatch => {
    return updateHabit(habit.id, habit)
      .then(updatedHabit => {
        return dispatch(updateHabitInStore(updatedHabit.id, updatedHabit))
      })
  }
}

const deleteHabitFromStore = (id) => {
  return {
    type: DELETE_HABIT,
    id
  }
}

export const deleteHabitAction = (id) => {
  return dispatch => {
    return deleteHabit(id)
      .then(() => {
        return dispatch(deleteHabitFromStore(id))
      })
  }
}
