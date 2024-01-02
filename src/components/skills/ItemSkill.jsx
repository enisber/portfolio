import React from 'react'
import './ItemSkill.css'
import IconSkill from './IconSkill'

const ItemSkill = (props) => {
  return (
    <div className='itemContainer'>
      <div className='icon'>
        <IconSkill name={props.name}/>
      </div>
      <p>{props.name}</p>
    </div>
  )
}

export default ItemSkill