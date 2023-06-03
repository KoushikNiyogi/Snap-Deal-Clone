import React from 'react'
import {FaStarHalfAlt,FaStar,FaRegStar} from "react-icons/fa"
import { Flex } from '@chakra-ui/react'
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
    <Flex alignItems={"center"}>
        {
            ratingStar
        }
    </Flex>
  )
}

export default Stars