import React from 'react'
import { connect } from 'react-redux'

const Header = ({ setView }) => {
  return (
    <>
      <div className='header'>
        <p className="text" onClick={() => setView('landing')}>Habit Tracker</p>
        <img className='logo' src='/android-chrome-192x192.png' alt='Habit Tracker Logo'/>
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
