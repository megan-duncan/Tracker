import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createActivity } from '../actions/entries'

const AddHabit = (props) => {
  const { dispatch, habits } = props
  const [addingActivity, setAddingActivity] = useState(false)
  const [addDate, setAddDate] = useState(false)
  const [formData, setFormData] = useState({
    habits_id: 0,
    date: Date.now()
  })
  const [label, setLabel] = useState('')
  const toggleAddDate = () => {
    // evt.preventdefault()
    setAddDate(!addDate)
  }
  const toggleAddingActivity = () => {
    setAddingActivity(!addingActivity)
  }
  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    const name = habits.find(habit => habit.id === (formData.habits_id - 1))
    setLabel(name)
  }
  const convertDate = () => {
    formData.date = new Date(formData.date).getTime()
  }
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(createActivity(formData))
    setAddingActivity(false)
    setAddDate(false)
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
      <button onClick={toggleAddingActivity}>Add Diary Entry</button>
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
          {addDate
            ? (
              <div>
                <label htmlFor="date">date:</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={changeHandler}/>
                <button type="button" onClick={convertDate}>Add Date</button>
              </div>
            )
            : <div>
              <p>If your date is one other than today: </p>
              <button type="button" onClick={toggleAddDate}>Add Date</button>
            </div>}
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
