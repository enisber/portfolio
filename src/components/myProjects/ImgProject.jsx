import React, {useEffect, useState} from 'react'
import './ImgProject.css'
import projectsImgs from '../../assets/imgsProjects'

const ImgProject = (props) => {
    const [imgPath, setImgPath] = useState('');

    useEffect(() => {
      if(props.name === 'Results summary component'){
        props.idx===1?setImgPath(projectsImgs.resultSum1):setImgPath(projectsImgs.resultSum2);
            
      }else if(props.name === 'Introduction component'){
        props.idx===1?setImgPath(projectsImgs.introComp1):setImgPath(projectsImgs.introComp3);
      }
    }, [])
    
    return (<img  src={imgPath} alt={props.name} className='imgProject'/>)
}

export default ImgProject