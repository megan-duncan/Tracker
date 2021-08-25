import React, { useState } from 'react'
import { connect } from 'react-redux'

// import { createHabit } from '../actions/habits'

const AddHabit = (props) => {
  const { habits } = props

  const [viewHabits, setViewHabits] = useState(false)
  // const [view, setView] = useState('')

  const toggleHabits = () => {
    setViewHabits(!viewHabits)
  }

  // const changeView = (name) => {
  //   setView(name)
  //   toggleHabits()
  // }
  // const changeHandler = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   })
  // }

  // const submitHandler = (event) => {
  //   event.preventDefault()
  //   dispatch(createHabit(formData))
  //   setHabits(false)
  // }

  return (
    <div>
      <button onClick={toggleHabits}>View Habits</button>
      {viewHabits && (
        habits.map(habit => {
          return <p key={habit.id}>{habit.name}</p>
        })
      )}
      <hr />
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    habits: globalState.habits
  }
}

export default connect(mapStateToProps)(AddHabit)
