import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createHabit } from '../actions/habits'

const AddHabit = (props) => {
  const { dispatch } = props

  const [adding, setAdding] = useState(false)
  const [formData, setFormData] = useState({
    name: '...',
    desired: false
  })

  const toggleAdding = () => {
    setAdding(!adding)
  }

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(createHabit(formData))
    setAdding(false)
  }

  return (
    <div>
      <button onClick={toggleAdding}>Add Habit</button>
      {adding && (
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Habit Name</label>
          <input type="text" name="name" id="name" onChange={changeHandler} value={formData.name} /><br />
          <label htmlFor="desired">Do I want to keep doing this?</label>
          <input type="checkbox" name="desired" id="desired" onChange={changeHandler} value={true} /><br />
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
