import { useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';

export const PrivateRoute = ({children}) => {
  const {onOpen } = useDisclosure();
  
  const user = useSelector((store) => {
    return store.loginReducer.user;
  });


  return user ? children: onOpen()
}
