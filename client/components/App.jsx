import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getHabits } from '../actions/habits'
import { getActivities } from '../actions/activities'
// import Menu from './Menu'
import Activity from './Activity'
import Header from './Header'
import AddActivity from './AddHabit'

function App (props) {
  useEffect(() => {
    props.dispatch(getHabits())
    props.dispatch(getActivities())
  }, [])
  const todayDate = Date()
  return (
    <>
      <div className='app'>
        <Header />
        <p>{todayDate}</p>
        <ul>
          {props.activities.map(activity => {
            return <Activity key={activity.id} activity={activity} todayDate={todayDate}/>
          })}
        </ul>
        <AddActivity todayDate={todayDate}/>
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
