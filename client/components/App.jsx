import React from 'react'
import { connect } from 'react-redux'

function App (props) {
  return (
    <>
      <div className='app'>
        <h1>Habit Tracker</h1>
      </div>
    </>
  )
}

export default connect()(App)
