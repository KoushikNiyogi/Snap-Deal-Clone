import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  CheckboxGroup,
  Checkbox,
  Stack,
  Flex,
  RadioGroup,
  Radio
} from '@chakra-ui/react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useSearchParams } from 'react-router-dom'
import Stars from './Stars'
import { useSelector } from 'react-redux'
const shoes = [
  ["rating.rate", [{ text: 4, value: "4-5" }, { text: 3, value: "3-5" }, { text: 2, value: "2-5" }, { text: 1, value: "1-5" }, { text: 0, value: "0-5" }]],
  ["color", [{ text: "Black", value: "Black" }, { text: "Blue", value: "Blue" }, { text: "Brown", value: "Brown" }, { text: "Orange", value: "Orange" }]],
  ["productline",[{text:"Adidas",value:"Adidas"},{text:"Nike",value:"Nike"},{text:"Puma",value:"Puma"},{text:"Reebok",value:"Reebok"}]],
  ["price",[{text : "Rs. 450-700", value : "450-750"},{text : "Rs. 750-1000",value : "750-1000"},{text:"Rs. 1000-1250",value:"1000-1300"},{text:"Rs. 1300-1700"}]]
]

const clothes = [
  ["rating.rate", [{ text: 4, value: "4-5" }, { text: 3, value: "3-5" }, { text: 2, value: "2-5" }, { text: 1, value: "1-5" }, { text: 0, value: "0-5" }]],
  ["color",[{ text: "Black", value: "Black" }, { text: "White", value: "White" }, { text: "Blue", value: "Blue" }, { text: "Brown", value: "Brown" }]],
  ["productline",[{text:"Alieans",value:"Alieans"},{text:"Dennis Lingo",value:"Dennis Lingo"},{text:"Hangup",value:"Hangup"},{text:"Vivid India",value:"Vivid India"}]],
  ["price",[{text : "Rs. 450-700", value : "450-750"},{text : "Rs. 750-1000",value : "750-1000"},{text:"Rs. 1000-1250",value:"1000-1300"},{text:"Rs. 1300-1700"}]],
  ["size",[{text : "M (Medium)",value:"36"},{text: "L (Large)", value: "38"},{text: "XL (Extra Large)" , value: "40"},{text: "XXL (XXL)", value: "42"}]],
  ["category",[{text: "Shirt", value : "Shirt"},{text: "Trouser", value : "Trouser"},{text: "Jacket", value : "Jacket"}]]
]
const initialState = {
  rating: [],
  color: [],
  productline : [],
  price : []
}

const colthingInitialState={
  ...initialState,
  size : [],
  category : []
}

const Filter = () => {
  const [filterData,setFilterData] = useState([]);
  const [searchparams, setSearchParams] = useSearchParams()
  const store = useSelector(state => state.ProductReducer);
  const [filterState, setFilter] = useState(() =>{
     if(store.path=="menshoes"||store.path=="womenshoes"){
      return {
        rating: []&&[searchparams.get("rating.rate_gte"),searchparams.get("rating.rate_lte")] ,
        color: searchparams.getAll("color"),
        productline: searchparams.getAll("productline"),
        price: []&&[searchparams.get("price_gte"),searchparams.get("price_lte")] 
      } || initialState
     }else{
      return {
        rating: []&&[searchparams.get("rating.rate_gte"),searchparams.get("rating.rate_lte")] ,
        color: searchparams.getAll("color"),
        productline: searchparams.getAll("productline"),
        price: []&&[searchparams.get("price_gte"),searchparams.get("price_lte")],
        size : searchparams.getAll("size"),
        category : searchparams.getAll("category")
      } || colthingInitialState
     }
        
    }
    );


  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name == "rating.rate"||name == "price") {
      value = value.split("-");
    }

    if (name == "rating.rate" || name == "price") {
     name == "rating.rate" ? setFilter({ ...filterState, rating: value }) : setFilter({ ...filterState, price: value });
    }
    if (name == "color") {
      let newCategory = [...filterState.color];
      if (newCategory.includes(value)) {
        newCategory = newCategory.filter((item) => item != value);
      } else {
        newCategory = [...newCategory, value]
      }
      setFilter({ ...filterState, color: newCategory })
    }
    if(name == "productline"){
      let newCategory = [...filterState.productline];
      if (newCategory.includes(value)) {
        newCategory = newCategory.filter((item) => item != value);
      } else {
        newCategory = [...newCategory, value]
      }
      setFilter({ ...filterState, productline : newCategory })
    }
    if(name == "size"){
      let newCategory = [...filterState.size];
      if (newCategory.includes(value)) {
        newCategory = newCategory.filter((item) => item != value);
      } else {
        newCategory = [...newCategory, value]
      }
      setFilter({ ...filterState, size : newCategory })
    }
    if(name == "category"){
      let newCategory = [...filterState.category];
      if (newCategory.includes(value)) {
        newCategory = newCategory.filter((item) => item != value);
      } else {
        newCategory = [...newCategory, value]
      }
      setFilter({ ...filterState, category : newCategory })
    }
  }

  

  useEffect(() => {
    let params = {};

    filterState.rating.length != 0 && !filterState.rating.includes(null) && (params["rating.rate_gte"] = filterState.rating[0])
    filterState.rating.length != 0 && !filterState.rating.includes(null) &&(params["rating.rate_lte"] = filterState.rating[1])
    filterState.color.length != 0 && (params["color"] = filterState.color)
    filterState.productline.length != 0 &&(params["productline"] = filterState.productline)
    filterState.price.length != 0 && !filterState.price.includes(null) && (params["price_gte"] = filterState.price[0])
    filterState.price.length != 0 && !filterState.price.includes(null) &&(params["price_lte"] = filterState.price[1])
    filterState.size!=undefined && filterState.size.length !=0 && (params["size"] = filterState.size)
    filterState.category!=undefined && filterState.category.length !=0 && (params["category"] = filterState.category)
    searchparams.get("_order")!=undefined && (params["_sort"] = searchparams.get("_sort"))
    searchparams.get("_order")!=undefined && (params["_order"] = searchparams.get("_order"))
    searchparams.get("_page")!=undefined&&(params["_page"] = searchparams.get("_page"))
    searchparams.get("_page")!=undefined&&(params["_limit"] = searchparams.get("_limit"))
    setSearchParams(params);
  }, [filterState])
  /*{
    rating : `${searchparams.get("rating.rate_gte")}-${searchparams.get("rating.rate_lte")}`
    color : searchparams.getAll("color")
  }*/
  return (
    <Box w={{base:"100%",lg :"20%"}} padding={"10px"}>
      <h1>Product Filter</h1>
      <Accordion allowMultiple>
        {
           store.path == "womenshoes" || store.path == "menshoes" ? shoes.map((item) => {
            return <AccordionItem key={Date.now()+Math.random()+item[0]}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        {item[0] == "rating.rate" ? "Rating" : item[0]}
                      </Box>
                      {isExpanded ? (
                        <AiOutlineMinus fontSize='12px' />
                      ) : (
                        <AiOutlinePlus fontSize='12px' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {item[0] == "rating.rate" || item[0] == "price" ? <RadioGroup defaultValue = {filterState.rating.join("-")||null}>
                      <Stack>
                        {
                          item[1].map((elm) => {
                            
                            
                            return <Radio key={elm.value+elm.text} name={item[0]} value={elm.value} onChange={handleChange}>{item[0]==="rating.rate" ?  <Flex  alignItems="center" ><Stars rating = {elm.text} /><span style={{marginLeft : "15px"}}>& Up</span></Flex>
                            : elm.text}</Radio>
                          })
                        }
                      </Stack>
                    </RadioGroup> :
                      <CheckboxGroup defaultValue={item[0] == "color"? filterState.color : filterState.productline}>
                        <Stack spacing={5} direction={"column"}>
                          {
                            item[1].map((elm) => {
                              
                              return <Checkbox key={elm.value+elm.text} name={item[0]} value={elm.value} onChange={handleChange}>{item[0] === "color" ? <Flex alignItems={"center"}><Box mr={"10px"} height={"10px"} width={"10px"} backgroundColor={elm.value}></Box>{elm.text}</Flex> : <>{elm.text}</>}</Checkbox>
                            })
                            
                          }
                        </Stack>
                      </CheckboxGroup>
                    }
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          }) : clothes.map((item) => {
            return <AccordionItem key={Date.now()+Math.random()+item[0]}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        {item[0] == "rating.rate" ? "Rating" : item[0]}
                      </Box>
                      {isExpanded ? (
                        <AiOutlineMinus fontSize='12px' />
                      ) : (
                        <AiOutlinePlus fontSize='12px' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {item[0] == "rating.rate" || item[0] == "price" ? <RadioGroup defaultValue = {filterState.rating.join("-")||null}>
                      <Stack>
                        {
                          item[1].map((elm) => {
                            
                            
                            return <Radio key={elm.value+elm.text} name={item[0]} value={elm.value} onChange={handleChange}>{item[0]==="rating.rate" ?  <Flex  alignItems="center" ><Stars rating = {elm.text} /><span style={{marginLeft : "15px"}}>& Up</span></Flex>
                            : elm.text}</Radio>
                          })
                        }
                      </Stack>
                    </RadioGroup> :
                      <CheckboxGroup defaultValue={item[0] == "color"? filterState.color : item[0]=="productline"?  filterState.productline : item[0] == "size" ? filterState.size : filterState.category}>
                        <Stack spacing={5} direction={"column"}>
                          {
                            item[1].map((elm) => {
                              
                              return <Checkbox key={elm.value+elm.text} name={item[0]} value={elm.value} onChange={handleChange}>{item[0] === "color" ? <Flex alignItems={"center"}><Box mr={"10px"} height={"10px"} width={"10px"} backgroundColor={elm.value}></Box>{elm.text}</Flex> : <>{elm.text}</>}</Checkbox>
                            })
                            
                          }
                        </Stack>
                      </CheckboxGroup>
                    }
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          })
        }
      </Accordion>
    </Box>
  )
}

export default Filter