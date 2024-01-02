import React from 'react'
import './Projects.css'
import ProjectItem from './ProjectItem'
import data from '../../assets/projectsData.json'



const Projects = () => {
 
  return (
    <div className='projectsSection' id='projects'>
        <div className='projectsContainer'>
            <h2>Personal Projects</h2>
            <div className='itemsProyContainer'>
            {data.map(item => 
              <ProjectItem key={item.id} project={item}/>
            )}
            </div>
        </div>
    </div>
  )
}

export default Projects
