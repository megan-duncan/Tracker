import { combineReducers } from 'redux'

import habits from './habits'
import activities from './activities'

export default combineReducers({
  habits,
  activities
})
