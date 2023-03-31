import { Action } from "@remix-run/router"
import{
    PRODUCT_GETREQUEST_FAILURE,
    PRODUCT_GETREQUEST_PENDING,
    PRODUCT_GETREQUEST_SUCCESS,
    UPDATE_PATH,
    TOTAL_ITEMS
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
    case TOTAL_ITEMS : return{
        ...state,
        totalCount : payload
    }
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
        products : payload
    }
    case PRODUCT_GETREQUEST_FAILURE : return {
        ...state,
        isLoading :false,
        isError : true
    }
    default : return state;
  }
}