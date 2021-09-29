import { combineReducers } from 'redux'

import habits from './habits'
import entries from './entries'

export default combineReducers({
  habits,
  entries
})
