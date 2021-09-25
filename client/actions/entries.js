import { fetchEntries, addEntry, deleteEntry, updateEntry } from '../apis/entries'

export const SET_ENTRIES = 'SET_ENTRIES'
export const ADD_ENTRY = 'ADD_ENTRY'
export const UPDATE_ENTRY = 'UPDATE_ENTRY'
export const DELETE_ENTRY = 'DELETE_ENTRY'

const setEntries = (entries) => {
  return {
    type: SET_ENTRIES,
    entries
  }
}

export const getEntries = () => {
  return dispatch => {
    return fetchEntries()
      .then(entries => {
        return dispatch(setEntries(entries))
      })
  }
}

const addEntryToStore = (entry) => {
  return {
    type: ADD_ENTRY,
    entry
  }
}

export const createEntry = (entry) => {
  return dispatch => {
    return addEntry(entry)
      .then(entry => {
        return dispatch(addEntryToStore(entry))
      })
  }
}

const updateEntryInStore = (id, entry) => {
  return {
    type: UPDATE_ENTRY,
    id,
    entry
  }
}

export const updateEntryAction = (entry) => {
  return dispatch => {
    return updateEntry(entry.id, entry)
      .then(updatedEntry => {
        return dispatch(updateEntryInStore(updatedEntry.id, updatedEntry))
      })
  }
}

const deleteEntryFromStore = (id) => {
  return {
    type: DELETE_ENTRY,
    id
  }
}

export const deleteEntryAction = (id) => {
  return dispatch => {
    return deleteEntry(id)
      .then(() => {
        return dispatch(deleteEntryFromStore(id))
      })
  }
}
