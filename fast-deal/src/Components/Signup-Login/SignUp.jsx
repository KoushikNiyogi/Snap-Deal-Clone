import React, { useContext, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Box,
  FormLabel,
  Button,
  Text,
  Progress,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { LoginSignUpContext } from "../../context/Login-SignUpContext";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onClose } = useContext(LoginSignUpContext);

  const firstField = React.useRef(null);

  const handleSignUp = () => {
    
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {isLoading && (
            <Progress
              isIndeterminate
              hasStripe={true}
              isAnimated={true}
              size="sm"
            />
          )}
          <ModalHeader>Sign-Up</ModalHeader>
          <Text fontWeight="bold" mb="1rem" textAlign={"center"}>
            Register Now
          </Text>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <FormLabel>First Name</FormLabel>
              <Input
                value={firstName}
                ref={firstField}
                id="firstName"
                placeholder="Enter your first name"
                autoComplete="off"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <FormLabel mt={4}>Last Name</FormLabel>
              <Input
                value={lastName}
                ref={firstField}
                id="lastName"
                autoComplete="off"
                placeholder="Enter your last name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <FormLabel mt={4}>Number</FormLabel>
              <Input
                value={number}
                ref={firstField}
                id="number"
                autoComplete="off"
                placeholder="Enter your Number"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
              <FormLabel mt={4}>Email ID</FormLabel>
              <Input
                value={email}
                ref={firstField}
                id="email"
                autoComplete="off"
                placeholder="Enter your Email ID"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <FormLabel mt={4}>Password</FormLabel>
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
              onClick={handleSignUp}
              colorScheme="red"
            >
              Register
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUp;
