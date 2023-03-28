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

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const firstField = React.useRef(null);

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
                  setUserName(e.target.value);
                }}
              />
              <FormLabel mt={4}>Last Name</FormLabel>
              <Input
                value={password}
                ref={firstField}
                id="lastName"
                autoComplete="off"
                placeholder="Enter your last name"
                onChange={(e) => {
                  setPassword(e.target.value);
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
                  setPassword(e.target.value);
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
                  setPassword(e.target.value);
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
              onClick={handleLogin}
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

export default LoginModal;
