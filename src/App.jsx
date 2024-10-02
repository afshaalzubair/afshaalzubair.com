import { useState } from 'react'
import './App.css'
import SplineScene from './components/SplineScene'
import Button from './components/Button'; // Ensure correct import
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa'; // Icons

function App() {
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
          <div className="button-container">
            <Button
              className="button1"
              icon={<FaFileAlt />}
              label="Resume"
              link="https://google.com"
            />
            <Button
              className="button2"
              icon={<FaLinkedin />}
              label="LinkedIn"
              link="https://linkedin.com/in/afshaal-zubair"
            />
            <Button
              className="button3"
              icon={<FaGithub />}
              label="GitHub"
              link="https://github.com/afshaalzubair"
            />
          </div>
        </main>
      </div>
    </>
  )
}

export default App;
