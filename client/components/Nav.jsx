import React from 'react'
import { connect } from 'react-redux'

const Nav = ({ setView }) => {
  return (
    <>
      <div className='nav'>
        <div onClick={() => setView('landing')}><p>ACTIVITIES</p></div>
        <div onClick={() => setView('viewHabits')}><p >HABITS</p></div>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    albums: globalState.albums
  }
}

export default connect(mapStateToProps)(Nav)
