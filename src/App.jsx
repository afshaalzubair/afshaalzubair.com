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
          <div className="intro-text">
            <h1 className="intro1">
              Hello there.
            </h1>
            <h1 className="intro2">
              My name is
            </h1>
          </div>
          <div className="mobile-only">
            Sorry, this website is not compatible with mobile, please view on PC for intended experience!
          </div>
          <span className="sub-caption">
            I'm a freshman studying computer science at UT Austin.
          </span>
          <div className="button-container">
            <Button
              className="button1"
              icon={<FaFileAlt />}
              label="Resume"
              link="https://drive.google.com/drive/folders/1rxQDy5FutgG6TEKmA9RMMiy0FexpsZVz?usp=sharing"
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
