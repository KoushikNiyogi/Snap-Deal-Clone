import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/ProductReducer/action'
import {
  Flex,
  Box,
  Grid,
  GridItem
} from "@chakra-ui/react"
import Filter from '../Components/ProductPageComponent/Filter'
import ProductCard from '../Components/ProductPageComponent/ProductCard'

const MensPage = () => {
  const dispatch = useDispatch();
  const {isLoading,isError,products,totalCount} = useSelector(state => state.ProductReducer);
  useEffect(()=>{
    dispatch(getProducts("menshoes"))
  },[])
  return (
    <Flex direction={"row"}>
      <Filter/>
      <Box width={"80%"} border={"1px solid red"} >
        <Grid templateColumns={"repeat(4,1fr)"} gap={"10px"} padding={"10px"}>
          {
            totalCount !=0 && products.map((item)=><GridItem> <ProductCard item = {item}/></GridItem>)
          }
        </Grid>
      </Box>
    </Flex>
  )
}

export default MensPage