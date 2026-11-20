
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // timer states
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  // timer interval
  useEffect(() => {
    let interval = null

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1)
      }, 1000)
    }

    // clean up interval
    return () => clearInterval(interval)
  }, [isRunning])

  // start
  const handleStart = () => {
    setIsRunning(true)
  }

  // pause
  const handlePause = () => {
    setIsRunning(false)
  }

  // reset
  const handleReset = () => {
    setIsRunning(false)
    setElapsedTime(0)
  }

  // convert seconds into HH:MM:SS
  const formatTime = () => {
    const hours = Math.floor(elapsedTime / 3600)
    const minutes = Math.floor((elapsedTime % 3600) / 60)
    const seconds = elapsedTime % 60

    return [hours, minutes, seconds]
      .map((time) => String(time).padStart(2, '0'))
      .join(':')
  }

  // change message depending on timer state
  const statusMessage = isRunning
    ? "countinggg..."
    : elapsedTime > 0
      ? "waiiting..."
      : "press start to count!"

  return (
    <main className="app">
      <div className="timer-container">

        {

        }
        <div className="timer-circle">

          <div className="timer-screen">

            <p className="device-name">it's a timer ♡</p>

            <h1 className="timer-display">
              {formatTime()}
            </h1>

            <img
              src="/welcome-avatar.gif"
              alt="My animated avatar"
              className="timer-avatar"
            />

            <p className="pet-message">
              {statusMessage}
            </p>

            <p className="timer-status">
              ● {isRunning ? 'RUNNING' : elapsedTime > 0 ? 'PAUSED' : 'IDLE'}
            </p>

          </div>

        </div>

        {

        }
        <div className="timer-controls">

          <button
            className="start-btn"
            onClick={handleStart}
            disabled={isRunning}
          >
            ▶
            <span>start</span>
          </button>

          <button
            className="pause-btn"
            onClick={handlePause}
            disabled={!isRunning}
          >
            Ⅱ
            <span>pause</span>
          </button>

          <button
            className="reset-btn"
            onClick={handleReset}
          >
            ↻
            <span>reset</span>
          </button>

        </div>

        <footer>
          made by astraejellyfish
        </footer>

      </div>
    </main>
  )
}

export default App
