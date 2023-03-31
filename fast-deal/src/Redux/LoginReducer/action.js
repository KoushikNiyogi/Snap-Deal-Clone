import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login =
  (userData, onClose, setrandom, toast, setEmail, setPassword) =>
  (dispatch) => {
    // console.log(userData);
    dispatch({ type: LOGIN_REQUEST });

    if (userData.email === "" || userData.password === "") {
      toast({
        title: "Fail.",
        description: "Please fill all the fields",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      return axios
        .get("https://calm-blue-cobra-wig.cyclic.app/users")
        .then((response) => {
          if (response) {
            const user = response.data.find((ele) => {
              if (
                ele.email === userData.email &&
                ele.password === userData.password
              ) {
                return true;
              }
              return false;
            });

            if (!user) {
              toast({
                title: "Invalid Account",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
              return;
            }

            localStorage.setItem("user", JSON.stringify(user));
            dispatch({ type: LOGIN_SUCCESS, payload: user });

            setEmail("");
            setPassword("");
            toast({
              title: "Login",
              description: "Login Successfull",
              status: "success",
              duration: 9000,
              isClosable: true,
            });

            setrandom(1);
            onClose();
          }
        })
        .catch(() => {
          dispatch({ type: LOGIN_FAILURE });
        });
    }
  };
