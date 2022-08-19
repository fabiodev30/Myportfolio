import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const CardSkill = (props) => {
  return (
    <div class="card mb-4" style={{backgroundColor:"#343a40"}}>
    <div class="card-body text-white">
     <FaCheckCircle style={{width: '20px', height: '30px',color: 'green'}}/>  {props.name}
    </div>
  </div>
  )
}

export default CardSkill