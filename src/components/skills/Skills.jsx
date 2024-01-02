import React from 'react'
import './Skills.css'
import ItemSkill from './ItemSkill'

const Skills = () => {
  return (
    <div className='skillsSection' id='skills'>
      <div className='skillsContainer'> 
        <h2>My skills</h2>
          <div className='skillsItems'>
            <ItemSkill name='HTML'/>
            <ItemSkill name='CSS'/>
            <ItemSkill name='JavaScript'/>
            <ItemSkill name='React'/>
            <ItemSkill name='SQL'/>
            <ItemSkill name='Git'/>
            <ItemSkill name='Github'/>
          </div>
        </div>
      </div>
  )
}

export default Skills