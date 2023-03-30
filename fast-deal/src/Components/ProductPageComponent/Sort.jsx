import { Select, Stack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Sort = () => {
    const [searchparams,setSearchParams] = useSearchParams()
    const handleChange = (e)=>{
      let value = e.target.value.split(" ");
      let params = {}
      if(value[1]!=undefined){
      params["_sort"] = value[0];
      params["_order"] = value[1];
      }
      searchparams.get("rating.rate_gte")!=null &&( params["rating.rate_gte"] =  searchparams.get("rating.rate_gte"))
      searchparams.get("rating.rate_lte")!=null &&( params["rating.rate_lte"] =  searchparams.get("rating.rate_lte"))
      searchparams.get("price_gte")!=null &&( params["price_gte"] =  searchparams.get("price_gte"))
      searchparams.get("price_lte")!=null &&( params["price_lte"] =  searchparams.get("price_lte"))
      searchparams.getAll("color").length!=0&&(params["color"] = searchparams.getAll("color"))
      searchparams.getAll("productline").length!=0&&(params["productline"] = searchparams.getAll("productline"))
      console.log(params);
      setSearchParams(params);
    }
    return (
        <div>
        <Select placeholder='Select option' onChange={handleChange}>
            <option value= "price asc">Price Low to High</option>
            <option value='price desc'>Price High to Low</option>
            <option value='rating.rate desc'>Popularity</option>
            <option value="discount desc">Discount</option>
        </Select>
        </div>
    )
}

export default Sort