import { Box, Button, Heading, Input, Progress, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../Redux/SignUpReducer/action";


export const Register = ({ onClose }) => {
  const {isLoading} = useSelector((store)=>store.signUpReducer)
  // console.log("rgei")
  // console.log(register)
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const toast = useToast()

  const dispatch = useDispatch();
  
  const handleRegister = () => {
    const registerData = {
      firstName,
      lasttName,
      number,
      email,
      password,
    };
    
    dispatch(SignUp(registerData,onClose,toast,setFirstName,setLastName,setNumber, setEmail,setPassword))
  };

  return (
    <Box m="auto" display={"grid"} gap="20px" borderRadius={"16px"}>
       {isLoading && (
          <Progress
            isIndeterminate
            hasStripe={true}
            isAnimated={true}
            size="sm"
          />
        )}
      <Heading textAlign={"center"}>Register Now</Heading>
      <Input
        type={"text"}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter Your First Name"
      />
      <Input
        type={"text"}
        value={lasttName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter Your Last Name"
      />
      <Input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter Your Mobile Number"
        
      />

      <Input
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
        
      />
      <Input
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
      />

      <Button onClick={handleRegister}colorScheme={"#e40046;"} >Register</Button>
    </Box>
  );
};
