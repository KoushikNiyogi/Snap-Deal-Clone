import { Box,Button,Flex } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({page,totalCount,setPage}) => {
  let Arr = new Array(totalCount).fill(0);
  return (
    <Flex>
        <Button isDisabled={page == 1} backgroundColor="#e40046" color ="white" onClick={()=>setPage(prev=>prev-1)}>Previous</Button>
        <Flex>
            {
             Arr.map((_,i)=><Button backgroundColor="#e40046" color ="white"  onClick={()=>setPage(i+1)}>{i+1}</Button>)  
            }
        </Flex>
        <Button isDisabled={page == totalCount} backgroundColor="#e40046" color ="white" onClick={()=>setPage(prev=>prev+1)}>Next</Button>
    </Flex>
  )
}

export default Pagination