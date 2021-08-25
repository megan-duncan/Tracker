import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createActivity } from '../actions/activities'

const AddHabit = (props) => {
  const { dispatch, habits } = props
  console.log(habits)
  const [addingActivity, setAddingActivity] = useState(false)
  const [formData, setFormData] = useState({
    habits_id: 0,
    date: Date.now()
  })
  const [label, setLabel] = useState('')

  const toggleAddingActivity = () => {
    setAddingActivity(!addingActivity)
  }

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      date: Date.now()
    })
    setLabel(habits[event.target.value - 1].name)
    console.log(formData)
  }
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(createActivity(formData))
    setAddingActivity(false)
    setFormData({
      habits_id: 0,
      date: Date.now()
    })
  }
  const habitList = []
  habits.map(habit => {
    return habitList.push({ label: habit.name, value: habit.id })
  })
  return (
    <div>
      <button onClick={toggleAddingActivity}>Add Activity</button>
      {addingActivity && (
        <form onSubmit={submitHandler}>
          <label htmlFor="habits_id">Choose a habit:</label>
          {/* <select options={ habitList } onChange={changeHandler}/> */}
          <select value={label} name='habits_id' id="habits_id" onChange={changeHandler}>
            <option>Choose...</option>
            {habits.map(habit => {
              return <option key={habit.id} value={parseInt(habit.id)}>{habit.name}</option>
            }) }
          </select>
          <br />
          <button type="submit">Add</button>
        </form>
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
