import React, { useState } from 'react'
import { connect } from 'react-redux'

import Habit from './Habit'
import AddHabit from './AddHabit'

const Habits = (props) => {
  const { habits, todayDate } = props
  const [habitView, setHabitView] = useState('all')

  return (
    <div>
      {habitView === 'all' && (
        habits.map(habit => {
          const name = habit.name
          return <p onClick={() => setHabitView(name)} key={habit.id}>{habit.name}</p>
        })
      )}
      {habitView === habits[0].name &&
       <Habit habit={habits[0]} todayDate={todayDate}/>
      }
      {habitView === habits[1].name &&
        <Habit habit={habits[1]} todayDate={todayDate}/>
      }
      <AddHabit/>

      <hr />
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    habits: globalState.habits
  }
}

export default connect(mapStateToProps)(Habits)
