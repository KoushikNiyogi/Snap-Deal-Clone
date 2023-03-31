import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/ProductReducer/action'
import {
  Flex,
  Box,
  Grid,
  GridItem,
  Text
} from "@chakra-ui/react"
import Filter from '../Components/ProductPageComponent/Filter'
import ProductCard from '../Components/ProductPageComponent/ProductCard'
import { useLocation, useSearchParams } from 'react-router-dom'
import Sort from '../Components/ProductPageComponent/Sort'

const MensPage = () => {
  const dispatch = useDispatch();
  const [searchparams,setSearchParams] = useSearchParams();
  const {isLoading,isError,products,totalCount} = useSelector(state => state.ProductReducer);
  const location = useLocation();
  const store = useSelector(state => state.ProductReducer);
  const getParamObj = ()=>{
    let params = {}
    
    searchparams.get("rating.rate_gte")!=null &&( params["rating.rate_gte"] =  searchparams.get("rating.rate_gte"))
    searchparams.get("rating.rate_lte")!=null &&( params["rating.rate_lte"] =  searchparams.get("rating.rate_lte"))
    searchparams.get("price_gte")!=null &&( params["price_gte"] =  searchparams.get("price_gte"))
    searchparams.get("price_lte")!=null &&( params["price_lte"] =  searchparams.get("price_lte"))
    searchparams.getAll("color").length!=0&&(params["color"] = searchparams.getAll("color"))
    searchparams.getAll("productline").length!=0&&(params["productline"] = searchparams.getAll("productline"))
    searchparams.get("_order")!=undefined && (params["_sort"] = searchparams.get("_sort"))
    searchparams.get("_order")!=undefined && (params["_order"] = searchparams.get("_order"))
    searchparams.getAll("size").length!=0&&(params["size"] = searchparams.getAll("size"))
    searchparams.getAll("category").length!=0&&(params["category"] = searchparams.getAll("category"))
    return params;

  }

  useEffect(()=>{
    //console.log(getParamObj());
    dispatch(getProducts(store.path,getParamObj()))
  },[location.key])
  //console.log(location);
  return (
    <Box width={"100%"} backgroundColor={"#f7f7f7"} paddingTop={"50px"} paddingBottom={"50px"}>
      
    <Flex width={"80%"} backgroundColor={"#ffffff"} margin={"auto"} direction={"row"}>
      <Filter />
      <Box width={"80%"}>
       <Flex alignItems={"center"} padding={"10px"} justifyContent={'space-between'}>
        <Text fontSize='2xl'>
         {
          store.path == "menshoes"  ? "Footware for Men":
          store.path == "womenshoes" ? "Footware for Women":
          store.path == "menclothing" ? "Clothing for Men" : 
          store.path == "womenclothing" ? "Clothing for Women":
          "Home Appliances"
         }
        </Text>
        <Sort/>
       </Flex>
      
      <Box width={"100%"} borderTop={"3px solid #f7f7f7"} borderLeft={"3px solid #f7f7f7"}>
        <Grid templateColumns={"repeat(4,1fr)"} gap={"10px"} padding={"10px"}>
          {
            totalCount !=0 && products.map((item)=><GridItem key={item.id}> <ProductCard item = {item}/></GridItem>)
          }
        </Grid>
        </Box>
      </Box>
    </Flex>
    </Box>
  )
}

export default MensPage