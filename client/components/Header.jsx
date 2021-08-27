import React from 'react'
import { connect } from 'react-redux'

const Header = ({ setView }) => {
  return (
    <>
      <div className='header'>
        <img className='logo' src='/android-chrome-192x192.png' alt='Habit Tracker Logo'/>
        <p onClick={() => setView('landing')}>Habit Tracker</p>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    albums: globalState.albums
  }
}

export default connect(mapStateToProps)(Header)
