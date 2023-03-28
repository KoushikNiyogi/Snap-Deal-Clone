import React from 'react'
import {FaStarHalfAlt,FaStar,FaRegStar} from "react-icons/fa"

const Stars = ({rating,count}) => {
 const ratingStar = Array.from({length : 5},(_,index)=>{
    let number = index + 0.5;
    return (
        <span key = {index}>
            {
             rating >= index + 1 ? (<FaStar className='icon' style={{color : "#FFC315"}}/>) : 
             rating >= number ? (<FaStarHalfAlt className='icon'  style={{color : "#FFC315"}}/>) :
             (<FaRegStar style={{color : "#FFC315"}}/>)
             }
        </span>
    )
    
 })
  return (
    <div style={{display:"flex",alignItems:"center"}}>
        {
            ratingStar
        }
        <p style={{marginLeft :  "15px"}}>({count})</p>
    </div>
  )
}

export default Stars