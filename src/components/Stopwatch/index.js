// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {
    timerElapsedTimeInSeconds: 0,
    isTimerRunning: false,
  }

  getElapsedTime = () => {
    const {timerElapsedTimeInSeconds} = this.state
    let minutes = Math.floor(timerElapsedTimeInSeconds / 60)
    let seconds = timerElapsedTimeInSeconds - minutes * 60
    minutes = minutes > 9 ? minutes : `0${minutes}`
    seconds = seconds > 9 ? seconds : `0${seconds}`
    return {
      minutes,
      seconds,
    }
  }

  startTimer = () => {
    this.uniqueId = setInterval(this.tick, 1000)
    this.setState({
      isTimerRunning: true,
    })
  }

  tick = () => {
    this.setState(prevState => ({
      timerElapsedTimeInSeconds: prevState.timerElapsedTimeInSeconds + 1,
    }))
  }

  stopTimer = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.uniqueId)
      this.setState({
        isTimerRunning: false,
      })
    }
  }

  resetTimer = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.uniqueId)
    }
    this.setState({
      timerElapsedTimeInSeconds: 0,
      isTimerRunning: false,
    })
  }

  render() {
    const {minutes, seconds} = this.getElapsedTime()
    return (
      <div className="main-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="stopwatch-timer-logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1 className="timer">
            {minutes}:{seconds}
          </h1>
          <div className="timer-controller-btn-container">
            <button
              className="btn btn-green"
              type="button"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              className="btn btn-red"
              type="button"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              className="btn btn-yellow"
              type="button"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
