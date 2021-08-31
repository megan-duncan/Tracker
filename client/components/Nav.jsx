import React from 'react'
import { connect } from 'react-redux'

const Nav = ({ setView }) => {
  return (
    <>
      <div className='nav'>
        <div className="link" onClick={() => setView('landing')}><p className="text">DIARY</p></div>
        <div className="link" onClick={() => setView('viewHabits')}><p className="text">HABITS</p></div>
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
