import React, { useState } from 'react'
import { connect } from 'react-redux'

import { deleteActivityAction, updateActivityAction } from '../actions/activities'

const Activity = (props) => {
  const { activity, dispatch, habits } = props

  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    id: activity.id,
    habit_id: activity.habit_id,
    name: activity.name,
    spotify_id: activity.spotify_id,
    image: activity.image
  })

  const deleteHandler = () => {
    return dispatch(deleteActivityAction(activity.id))
  }

  const toggleEditing = () => {
    setEditing(!editing)
  }

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(updateActivityAction(formData))
    setEditing(false)
  }

  return (
    <div key={activity.id}>
      <h3>{activity.name}</h3>
      <img style={{ width: '200px' }} src={activity.image} alt={`${activity.name} activity art`} />
      <button onClick={toggleEditing}>Edit</button>
      <button onClick={deleteHandler}>Delete</button>
      {editing && (
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Activity name</label>
          <input type="text" name="name" id="name" onChange={changeHandler} value={formData.name} /><br />
          <label htmlFor="spotify_id">Spotify ID</label>
          <input type="text" name="spotify_id" id="spotify_id" onChange={changeHandler} value={formData.spotify_id} /><br />
          <label htmlFor="image">Activity art URL</label>
          <input type="text" name="image" id="image" onChange={changeHandler} value={formData.image} /><br />
          <label htmlFor="habit_id">Artist</label>
          <select name="habit_id" id="habit_id" value={formData.habit_id} onChange={changeHandler}>
            <option value="">---Select one</option>
            {habits.map(habit => {
              return <option key={habit.id} value={habit.id}>{habit.name}</option>
            })}
          </select><br />
          <button type="submit">Update</button>
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

export default connect(mapStateToProps)(Activity)