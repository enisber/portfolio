import React from 'react'
import { FaHtml5, FaReact, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";




const IconSkill = (props) => {
    if(props.name === "HTML")return (<FaHtml5 size={30}/>)
    if(props.name === "CSS")return (<FaCss3Alt size={30}/>)
    if(props.name === "JavaScript")return (<IoLogoJavascript size={30} />)
    if(props.name === "React")return (<FaReact size={30}/>)
    if(props.name === "Git")return (<FaGitAlt size={30}/>)
    if(props.name === "Github")return (<FaGithub size={30}/>)
    if(props.name === "SQL")return (<BsFiletypeSql size={30}/>)
}

export default IconSkill