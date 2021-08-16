import { fetchActivities, addActivity, deleteActivity, updateActivity } from '../apis/activities'

export const SET_ACTIVITIES = 'SET_ACTIVITIES'
export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY'
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY'

const setActivities = (activities) => {
  return {
    type: SET_ACTIVITIES,
    activities
  }
}

export const getActivities = () => {
  return dispatch => {
    return fetchActivities()
      .then(activities => {
        return dispatch(setActivities(activities))
      })
  }
}

const addActivityToStore = (activity) => {
  return {
    type: ADD_ACTIVITY,
    activity
  }
}

export const createActivity = (activity) => {
  return dispatch => {
    return addActivity(activity)
      .then(activity => {
        return dispatch(addActivityToStore(activity))
      })
  }
}

const updateActivityInStore = (id, activity) => {
  return {
    type: UPDATE_ACTIVITY,
    id,
    activity
  }
}

export const updateActivityAction = (activity) => {
  return dispatch => {
    return updateActivity(activity.id, activity)
      .then(updatedActivity => {
        return dispatch(updateActivityInStore(updatedActivity.id, updatedActivity))
      })
  }
}

const deleteActivityFromStore = (id) => {
  return {
    type: DELETE_ACTIVITY,
    id
  }
}

export const deleteActivityAction = (id) => {
  return dispatch => {
    return deleteActivity(id)
      .then(() => {
        return dispatch(deleteActivityFromStore(id))
      })
  }
}
