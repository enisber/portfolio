import React from 'react'
import { FaGithub } from "react-icons/fa";
import './ProjectItem.css'
import ImgProject from './ImgProject';
import { IoArrowForwardOutline } from "react-icons/io5";

const ProjectItem = ({project}) => {

  return ( 
    <div className='itemProContainer'>
      <div className='projectPresentation'>
        <h3 className='projectTitle'>{project.projectName}</h3>
        <p>{project.description}</p>
        <div className='itemTecnologias'>
          {project.technologies.map((t, i) => <p key={i}>{t}</p>)}
        </div>
      </div>
      <div className='projectImage1'>
        <ImgProject name={project.projectName} idx={1}/>
      </div>
      <div className='projectImage2'>
        <ImgProject name={project.projectName} idx={2}/>
      </div>
      <div className='githubLink'>
          <FaGithub size={40}/>
          <a href={project.path} target='_blank' rel='noopener noreferrer'>  
            Check the repository!
          </a>
          <IoArrowForwardOutline size={30}/>
      </div>
    </div>
  )
}

export default ProjectItem