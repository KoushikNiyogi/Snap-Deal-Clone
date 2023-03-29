
const initialState = {
  isLoading : false,
  isLogin : false,
  isError : false,
  
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isLogin: true, token: payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}