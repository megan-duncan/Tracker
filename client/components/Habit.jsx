import React from 'react'
import { connect } from 'react-redux'

// import { createHabit } from '../actions/habits'

const AddHabit = (props) => {
  const { habit, todayDate, activities } = props
  console.log(todayDate)
  const lastTime = activities.sort((a, b) => b.date - a.date).find(activity => activity.habits_id === habit.id)
  console.log(lastTime)
  const timeSince = (todayDate / 1000 - lastTime.date / 1000)
  console.log(timeSince)
  const daysSince = Math.floor(timeSince / 86400)
  console.log(daysSince)
  return (
    <div>
      <p>{habit.name}</p>
      {habit.desired
        ? <p>It has been {daysSince} days since you last {habit.name}, maybe you should do it today!</p>
        : <p>It has been {daysSince} days since you last {habit.name}, well done!</p>
      }
      <hr />
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    habits: globalState.habits,
    activities: globalState.activities
  }
}

export default connect(mapStateToProps)(AddHabit)
