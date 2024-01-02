import React from 'react'
import './About.css'

const About = () => {
  return (
    <div  className='studiesSection' id='about'>
      <div className='studiesContainer'>

        <h2>About me</h2>
        <div className='aboutMeTxt'>
          <p>I am Web Developer and an information technologies analyst student.
            I'm passionate about creating solutions that are not only functional but also
            interesting and user-friendly. While I may be a begginer,  I've been dedicated to 
            mastering my skills in web developement and exploring new frameworks.
            </p>
            <br/>
            <p>
            I'm seeking an opportunity to grow and improve my skills and
            to form a career in software development related roles.
            </p> 
        </div>

        <div className='verticalLine'></div>
        <div className='circle1'></div>
        <div className='circle2'></div>

        <div className='myStudiesContainer'>
          <p>My studies</p>
          <div className='boxStudy1'>
            <h3 className='educationTitle'>IT Analyst</h3>
            <p>At ORT University Uruguay</p>
            <p className='txtDescription'>From August 2021, currently studying</p>
          </div>

          <div className='boxStudy2'>
            <h3 className='educationTitle'>Web Programmer</h3>
            <p> At ORT University Uruguay</p>
            <p className='txtDescription'>From August 2021 to August 2023</p>
          </div>
        </div>



      </div>
    </div>
  )
}

export default About