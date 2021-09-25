import React from 'react'
import { connect } from 'react-redux'

import { deleteActivityAction } from '../actions/activities'

const Activity = (props) => {
  const { activity, dispatch, habits } = props

  const habit = habits.find(habit => habit.id === activity.habits_id)
  const deleteHandler = () => {
    return dispatch(deleteActivityAction(activity.id))
  }

  const activityDate = new Date(activity.date)
  return (
    <div className="activity" key={activity.id}>
      <h3>{activityDate.toDateString()}</h3>
      <div className="content">
        { habit.desired ? <p className='desired'>{habit.name}</p>
          : <p className="habit">{habit.name}</p>
        }
        <button onClick={deleteHandler}>Delete</button>
      </div>
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
