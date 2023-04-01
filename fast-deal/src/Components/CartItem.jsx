import { Button, ButtonGroup, Flex, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCartItem, getCartItem } from '../Redux/CartReducer/action'
import { Link } from 'react-router-dom'

const CartItem = ({ id, name, image, price, category }) => {
  console.log(image,name, price, category)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteCartItem(id)).then(() => dispatch(getCartItem()))
  }

  return (
    <Flex
      boxShadow="md"
      borderRadius="md"
      padding="20px"
      alignItems="center"
      marginBottom="15px"
    justifyContent='space-between'
    >
      <Image
        src={image}
        alt={name}
        borderRadius="md"
        width="150px"
        height="150px"
        marginRight="35%"
      />
      <Stack spacing={2} flex={1} marginRight={5}>
        <h2>Product Details</h2>
        <Text fontSize="xl" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="lg" fontWeight="medium">
          {category}
        </Text>
        <Text color="blue.600" fontSize="2xl">
          Rs : {price}
        </Text>
      </Stack>
      <ButtonGroup>
        <Button
          variant="ghost"
          colorScheme="blue"
          onClick={() => handleDelete(id)}
        >
          Delete
        </Button>
        <Link to="/checkout">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
        </Link>
      </ButtonGroup>
    </Flex>
  )
}

export default CartItem
