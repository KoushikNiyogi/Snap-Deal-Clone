import { useDisclosure } from "@chakra-ui/react";
import React, { createContext } from "react";

export const LoginSignUpContext = createContext();

export const LoginSignUpContextProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <LoginSignUpContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </LoginSignUpContext.Provider>
  );
};
