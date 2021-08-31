import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getHabits } from '../actions/habits'
import { getActivities } from '../actions/activities'
// import Menu from './Menu'
import Activity from './Activity'
import Header from './Header'
// import AddHabit from './AddHabit'
import AddActivity from './AddActivity'
// import Habit from './Habit'
import Habits from './Habits'
import Nav from './Nav'

function App (props) {
  // const { habits } = props
  useEffect(() => {
    props.dispatch(getHabits())
    props.dispatch(getActivities())
  }, [])
  const todayDate = Date.now()
  const readDate = new Date(todayDate)
  const [view, setView] = useState('landing')

  // const toggleHabits = () => {
  //   setViewHabits(!viewHabits)
  // }
  return (
    <>
      <div className='app'>
        <Header setView={setView}/>
        <Nav setView={setView}/>
        <p>{readDate.toDateString()}</p>
        {view === 'landing' &&
        <div className="activities">
          {props.activities.sort((a, b) => a.date - b.date).map(activity => {
            return <Activity key={activity.id} date={activity.date} activity={activity} todayDate={todayDate}/>
          })}
          <AddActivity/>
          {/* <AddHabit/> */}
        </div>
        }
        {view === 'viewHabits' &&
        <Habits todayDate={todayDate} />
        }
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
