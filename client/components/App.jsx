import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getHabits } from '../actions/habits'
import { getActivities } from '../actions/activities'
// import Menu from './Menu'
import Activity from './Activity'
import Header from './Header'

function App (props) {
  useEffect(() => {
    props.dispatch(getHabits())
    props.dispatch(getActivities())
  }, [])
  return (
    <>
      <div className='app'>
        <Header />
        <ul>
          {props.activities.map(activity => {
            return <Activity key={activity.id} activity={activity}/>
          })}
        </ul>
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    activities: globalState.activities,
    habits: globalState.habits
  }
}

export default connect(mapStateToProps)(App)
