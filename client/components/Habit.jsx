import React, { useState } from 'react'
import { connect } from 'react-redux'

// import { createHabit } from '../actions/habits'

const AddHabit = (props) => {
  const { habit, todayDate, activities } = props
  console.log(todayDate)
  const lastTime = activities.sort((a, b) => b.date - a.date).find(activity => activity.habits_id === habit.id)
  console.log(lastTime)
  const timeSince = (todayDate - lastTime.date)
  console.log(timeSince)
  // const daysSince = (timeSince / 86400)
  // console.log(daysSince)
  return (
    <div>
      <p>{habit.name}</p>
      {/* <p>{daysSince}</p> */}

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
