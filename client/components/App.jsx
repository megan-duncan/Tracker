import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getHabits } from '../actions/habits'
import { getActivities } from '../actions/activities'
// import Menu from './Menu'
import Activity from './Activity'
import Header from './Header'
import AddHabit from './AddHabit'
import AddActivity from './AddActivity'

function App (props) {
  useEffect(() => {
    props.dispatch(getHabits())
    props.dispatch(getActivities())
  }, [])
  const todayDate = Date.now()
  const readDate = new Date(todayDate)
  return (
    <>
      <div className='app'>
        <Header />
        <p>{readDate.toDateString()}</p>
        <ul>
          {props.activities.sort((a, b) => a.date - b.date).map(activity => {
            return <Activity key={activity.id} date={activity.date} activity={activity} todayDate={todayDate}/>
          })}
        </ul>
        <AddHabit/>
        <AddActivity/>
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
