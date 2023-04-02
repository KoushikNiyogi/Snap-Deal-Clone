import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, getTotalitems } from '../Redux/ProductReducer/action'
import {
  Flex,
  Box,
  Text,
  Stack,
  Skeleton,
  SimpleGrid,
  Hide,
  Button
} from "@chakra-ui/react"
import Filter from '../Components/ProductPageComponent/Filter'
import ProductCard from '../Components/ProductPageComponent/ProductCard'
import { useLocation, useSearchParams } from 'react-router-dom'
import Sort from '../Components/ProductPageComponent/Sort'
import Pagination from '../Components/ProductPageComponent/Pagination'
const fakearr = [0,0,0,0,0,0,0,0,0,0,0,0]
const MensPage = () => {
  const [showfilter, Togglefilter] = useState(false);
  const [page,setPage] = useState(1)
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
    searchparams.get("_page")!=undefined&&(params["_page"] = searchparams.get("_page"))
    searchparams.get("_page")!=undefined&&(params["_limit"] = searchparams.get("_limit"))
    return params;

  }
  useEffect(()=>{
    let params = {}
    if(page!=undefined){
      params["_page"] = page;
      params["_limit"] = 12;
    }
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
    setSearchParams(params);
  },[page])
  
  useEffect(()=>{
    
    dispatch(getTotalitems(store.path));
    dispatch(getProducts(store.path,getParamObj()))
  },[location.key]);
  return (
    <Box width={"100%"} backgroundColor={"#f7f7f7"} paddingTop={"50px"} paddingBottom={"50px"}>
      
    <Flex width={{base:"100%",lg :"80%"}} backgroundColor={"#ffffff"} margin={"auto"} direction={{ base: 'column', lg: "row" }}>
    <Hide below='lg'>
       <Filter />   
    </Hide>
     {showfilter&&<Filter />}
      <Box width={{base:"100%",lg :"80%"}}>
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
        <Flex>
        <Hide above='lg'>
                <Button backgroundColor="#e40046" color ="white" mr={"10px"} onClick={() => Togglefilter(!showfilter)}>{showfilter ? "Hide filters" : "Show Filters"}</Button>
        </Hide>
        <Sort/>
        </Flex>
        
       </Flex>
      
      <Box width={"100%"} borderTop={"3px solid #f7f7f7"} borderLeft={"3px solid #f7f7f7"}>
        <SimpleGrid  columns={{ base: 1, md: 2, lg: 4 }} gap={"10px"} padding={"10px"}>
          {
            isLoading == true ? fakearr.map((item)=>{
              return <Stack maxW='sm'>
              <Skeleton height='250px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
            </Stack>
           
            }) :
            products.length != 0 && products.map((item)=> <ProductCard  key={item.id} item = {item}/>)
          }
        </SimpleGrid >
        </Box>
        <Flex justifyContent = {"center"}>
        <Pagination page = {page} totalCount = {Math.ceil(totalCount/12)} setPage ={setPage}/>
        </Flex>
       
      </Box>
    </Flex>
    </Box>
  )
}

export default MensPage