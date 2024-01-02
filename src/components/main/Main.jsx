import React from 'react'
import './Main.css'
import Titulo from '../homeScreen/Titulo'
import About from '../about/About'
import Skills from '../skills/Skills'
import Projects from '../myProjects/Projects'

const Main = () => {
  return (
    <div className='containerGeneral'>
      <Titulo />
      <About/>
      <Skills />
      <Projects />
    </div>
  )
}

export default Main