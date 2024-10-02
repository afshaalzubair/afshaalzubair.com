import { useState } from 'react'
import './App.css'
import SplineScene from './components/SplineScene'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
            <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '10px' }} />
            <span>Resume</span>
          </button>
          <button className="button2">
            <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px' }} />
            <span>LinkedIn</span>
          </button>
          <button className="button3">
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '10px' }} />
            <span>GitHub</span>
          </button>
        </main>
      </div>
    </>
    
  )
}

export default App
