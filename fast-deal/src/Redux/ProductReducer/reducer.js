import { Action } from "@remix-run/router"
import{
    PRODUCT_GETREQUEST_FAILURE,
    PRODUCT_GETREQUEST_PENDING,
    PRODUCT_GETREQUEST_SUCCESS,
    UPDATE_PATH
} from "./actionTypes"
const initialstate = {
    isLoading : false,
    isError : false,
    path : JSON.parse(localStorage.getItem("path"))||"",
    products : [],
    totalCount : 0
}
export const reducer = (state = initialstate,{type,payload})=>{
    //console.log(type,payload)
  switch(type){
    case UPDATE_PATH : return{
        ...state,
        path : payload,
    }
    case PRODUCT_GETREQUEST_PENDING : return {
        ...state,
        isLoading : true
    }
    case PRODUCT_GETREQUEST_SUCCESS : return {
        ...state,
        isLoading : false,
        products : payload[0],
        totalCount : payload[1]
    }
    case PRODUCT_GETREQUEST_FAILURE : return {
        ...state,
        isLoading :false,
        isError : true
    }
    default : return state;
  }
}