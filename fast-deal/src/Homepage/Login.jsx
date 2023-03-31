import { Box, Button, Heading, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/LoginReducer/action";

export const Login = ({ onClose, setrandom }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
    console.log(userData);
    dispatch(login(userData, onClose, setrandom, toast, setEmail, setPassword));
  };
  return (
    <>
      <Box m="auto" display={"grid"} gap="20px">
        <Heading textAlign={"center"}>Login</Heading>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
        <Input
          value={password}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />

        <Button onClick={handleLogin} colorScheme={"#e40046;"}>
          Login
        </Button>
      </Box>
    </>
  );
};
