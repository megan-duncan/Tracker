import React from 'react'
import { connect } from 'react-redux'

// import { createHabit } from '../actions/habits'

const Habit = (props) => {
  const { habit, todayDate, entries } = props
  // const [streakCount, setStreakCount] = useState(0)
  console.log(todayDate + 'todayDate')
  // const cleanTodayDate = todayDate / 1000
  const lastTime = entries.sort((a, b) => b.date - a.date).find(activity => activity.habits_id === habit.id)
  console.log(lastTime + 'lastTime')
  const timeSince = (todayDate / 1000 - lastTime.date / 1000)
  console.log(timeSince + 'timeSince')
  const daysSince = Math.floor(timeSince / 86400)
  console.log(daysSince + 'daysSince')
  // const stuff = (habit) => {
  //   return habit.desired && daysSince === 0
  //     ? <p>You {habit.name} yesterday, do it again today to maintain your streak!</p>
  //     : habit.desired && daysSince > 0 ? <p>It has been {daysSince} days since you last {habit.name}, maybe you should do it today!</p>
  //       : <p>It has been {daysSince} days since you last {habit.name}, well done!</p>
  // }
  const message = (habit) => {
    if (habit.desired && daysSince === 0) {
      return `You ${habit.name} yesterday, do it again today to maintain your streak!`
    } else if (habit.desired && daysSince > 0) {
      return `It has been ${daysSince} days since you last ${habit.name}, maybe you should do it today!`
    } else return `It has been ${daysSince} days since you last ${habit.name}, well done!`
  }
  const habitArray = entries.filter(entry => entry.habits_id === habit.id).sort((a, b) => b.date - a.date)
  console.log(habitArray)
  // const streak1 = (habitArray) => {
  //   console.log(streakCount + 'streakCount1')
  //   for (let i = 0; i < habitArray.length; i++) {
  //     if ((habitArray[i].date - habitArray[(i + 1)].date) <= 172800000) {
  //       // console.log(streakCount + 'streakCount2')
  //       return setStreakCount(streakCount + 1)
  //     } else return streakCount
  //   }
  // }
  // const streak = (entries, habit, todayDate) => {
  //   if ((todayDate - habitArray[1].date) <= 172800000) {
  //     return <p>You've {habit.name} the last {streakCount} days in a row! Well Done!</p>
  //   } else return <p> You're not on a streak</p>
  // }
  // <p>You've {habit.name} the last {streakCount} days in a row! Well Done!</p>
  return (
    <div>
      <p>{habit.name}</p>
      <p>{message(habit)}</p>
      {/* {streak(entries, habit, todayDate)} */}
      <hr />
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    habits: globalState.habits,
    entries: globalState.entries
  }
}

export default connect(mapStateToProps)(Habit)
