import React from 'react'
import { connect } from 'react-redux'

import Habit from './Habit'
import AddHabit from './AddHabit'
import NoEntries from './NoEntries'

const Habits = (props) => {
  const { habits, todayDate, setHabitView, habitView, entries } = props
  const clickHandler = (entries, habit) => {
    if (entries.find(activity => activity.habits_id === habit.id)) {
      setHabitView(habit.name)
    } else setHabitView('no entries')
  }
  const allHabits = (entries, habitView, habits) => {
    if (habitView === 'all') {
      return habits.map(habit => {
        if (habit.desired) {
          return <p onClick={() => clickHandler(entries, habit)} key={habit.id} className="desired">{habit.name}</p>
        } else {
          return <p onClick={() => clickHandler(entries, habit)} key={habit.id} className="habit">{habit.name}</p>
        }
      })
    }
  }
  const eachHabit = (habitView, habits) => {
    return habits.map(habit => {
      return habitView === habit.name &&
      <Habit habit={habit} todayDate={todayDate} key={habit.id}/>
    })
  }
  return (
    <div>
      {allHabits(entries, habitView, habits)}
      {eachHabit(habitView, habits)}
      {habitView === 'no entries' &&
      <NoEntries />
      }
      {habitView === 'all' &&
      <AddHabit/>
      }
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    habits: globalState.habits,
    entries: globalState.entries
  }
}

export default connect(mapStateToProps)(Habits)
