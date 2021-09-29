import React from 'react'
import { connect } from 'react-redux'

const Nav = ({ setView, setHabitView }) => {
  const clickHandler = () => {
    setView('viewHabits')
    setHabitView('all')
  }
  return (
    <>
      <div className='nav'>
        <div className="link" onClick={() => setView('diary')}><p className="text">DIARY</p></div>
        <div className="link" onClick={() => clickHandler()}><p className="text">HABITS</p></div>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    habits: globalState.habits,
    entries: globalState.entries
  }
}

export default connect(mapStateToProps)(Nav)
