import {
  Box,
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { LoginSignUpContext } from "../../context/Login-SignUpContext";

export const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");


  const firstField = React.useRef(null);

  const [isLoading, setIsLoading] = useState(false);


  const {isOpen,onClose} = useContext(LoginSignUpContext)


  const handleLogin = ()=>{


    setUserEmail("")
    setPassword("")

  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <FormLabel htmlFor="username">User Email</FormLabel>
              <Input
                value={userEmail}
                ref={firstField}
                id="userEmail"
                placeholder="Enter you Email to login"
                autoComplete="off"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <FormLabel mt={4} htmlFor="password">
                Password
              </FormLabel>
              <Input
                value={password}
                ref={firstField}
                id="password"
                autoComplete="off"
                placeholder="Enter your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              isDisabled={isLoading}
              onClick={handleLogin}
              colorScheme="red"
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;