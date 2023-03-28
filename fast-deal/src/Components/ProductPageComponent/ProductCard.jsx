import React from 'react'
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { SlHeart } from "react-icons/sl"
import Stars from './Stars';
const ProductCard = ({ item }) => {
  return (
    <Box padding={"10px"} textAlign={"start"} _hover={{
      boxShadow: "0 5px 17px 0 rgba(23,84,116,0.18)",
      zIndex: "15"
    }}>
      <Flex justifyContent={"flex-end"}>
        <SlHeart />
      </Flex>
      <Image
        boxSize='250px'
        objectFit='cover'
        src={item.image[0]}
        alt='Dan Abramov'

      />
      <Text fontSize='xl' color={"#666"}>{item.name}</Text>
      <Flex>
        <Text textDecoration={"line-through"} fontSize='md' color={"#666"} mr={"10px"}>Rs. {item["strikeoff-price"]}</Text>
        <Text fontSize='lg' color={"black"} mr={"10px"}>Rs. {item.price}</Text>
        <Text fontSize='md' color={"#666"} border={"1px solid #666"} padding={"2px"}>{item.discount}% off</Text>
      </Flex>
      <Stars rating = {item.rating.rate} count ={item.rating.count}/>
    </Box>
  )
}

export default ProductCard