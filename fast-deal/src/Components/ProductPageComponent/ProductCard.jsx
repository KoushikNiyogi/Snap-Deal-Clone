import React from 'react'
import {Link} from "react-router-dom"
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { SlHeart } from "react-icons/sl"
import Stars from './Stars';
import { Skeleton, Stack } from '@chakra-ui/react'
const ProductCard = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
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
      <Flex alignItems="center">
        <Text textDecoration={"line-through"} fontSize='md' color={"#666"} mr={"10px"}>Rs. {item["strikeoff-price"]}</Text>
        <Text fontSize='lg' color={"black"} mr={"10px"}>Rs. {item.price}</Text>
        <Text fontSize='md' color={"#666"} border={"1px solid #666"} padding={"2px"}>{item.discount}% off</Text>
      </Flex>
      <Flex  alignItems="center" ><Stars rating = {item.rating.rate} count ={item.rating.count}/><span style={{marginLeft : "15px"}}>({item.rating.count} votes)</span></Flex>
      <Text fontSize='md' color={"#666"}>Category : {item.brand || item.category}</Text>
    </Box>
    </Link>
  )
}

export default ProductCard