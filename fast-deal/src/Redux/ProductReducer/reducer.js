import{
    PRODUCT_GETREQUEST_FAILURE,
    PRODUCT_GETREQUEST_PENDING,
    PRODUCT_GETREQUEST_SUCCESS
} from "./actionTypes"
const initialstate = {
    isLoading : false,
    isError : false,
    products : [],
    totalCount : 0
}
export const reducer = (state = initialstate,{type,payload})=>{
  switch(type){
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