import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { getHabits } from '../actions/habits'
import { getEntries } from '../actions/entries'
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
    props.dispatch(getEntries())
  }, [])
  const todayDate = Date.now()
  const readDate = new Date(todayDate)
  const [view, setView] = useState('diary')
  const [habitView, setHabitView] = useState('all')

  return (
    <>
      <div className='app'>
        <Header setView={setView}/>
        <Nav setView={setView} setHabitView={setHabitView}/>
        <p>{readDate.toDateString()}</p>
        {view === 'diary' &&
        <div className="activities">
          <AddActivity/>
          {props.entries.sort((a, b) => b.date - a.date).map(activity => {
            return <Activity key={activity.id} date={activity.date} activity={activity} todayDate={todayDate}/>
          })}
          {/* <AddHabit/> */}
        </div>
        }
        {view === 'viewHabits' &&
        <Habits todayDate={todayDate} setHabitView={setHabitView} habitView={habitView}/>
        }
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    entries: globalState.entries,
    habits: globalState.habits
  }
}

export default connect(mapStateToProps)(App)
