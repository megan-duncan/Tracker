import React from 'react'
import { connect } from 'react-redux'

const Header = ({ setView }) => {
  return (
    <>
      <div className='header'>
        <p className="text" onClick={() => setView('diary')}>Habit Tracker</p>
        <img className='logo' src='/android-chrome-192x192.png' alt='Habit Tracker Logo'/>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
  }
}

export default connect(mapStateToProps)(Header)
