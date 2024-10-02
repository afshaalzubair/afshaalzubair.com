import { useState } from 'react'
import './App.css'
import SplineScene from './components/SplineScene'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SplineScene />
      <div className="app">
        <main>
          <h1 className="intro1">
            <b>Hello there.</b>
          </h1>
          <h1 className="intro2">
            <b>My name is</b>
          </h1>
          <span className="sub-caption">
            I'm a freshman studying computer science at UT Austin.
          </span>
          <button className="button1">
            <span>Resume</span>
          </button>
          <button className="button2">
            <span>LinkedIn</span>
          </button>
          <button className="button3">
            <span>GitHub</span>
          </button>
        </main>
      </div>
    </>
    
  )
}

export default App
