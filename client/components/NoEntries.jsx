import React from 'react'
import { connect } from 'react-redux'

const NoEntries = () => {
  return (
    <>
      <p>You haven't entered this habit in your diary yet, maybe you should!</p>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
  }
}

export default connect(mapStateToProps)(NoEntries)
