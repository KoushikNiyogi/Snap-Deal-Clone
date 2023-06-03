import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Loader from "./Loader/Loader";
import { getCartItem } from "../Redux/CartReducer/action";
import CartItem from "./CartItem";

const AddCart = () => {
  const dispatch = useDispatch();
  const { cart, isLoading } = useSelector((store) => store.cartReducer);

  useEffect(() => {
    dispatch(getCartItem());
  }, [dispatch]);

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <Box maxW="1200px" mx="auto" py={8} px={4}>
      <Heading as="h1" size="2xl" mb={4}>
        Shopping Cart
      </Heading>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {cart.length > 0 ? (
              <>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image[0]}
                    price={item.price}
                    category={item.rating.rate}
                  />
                ))}
                <Flex
                  justifyContent="flex-end"
                  borderTopWidth="1px"
                  p={4}
                  fontWeight="bold"
                >
                  <Box>
                    <h2>Total Items:{cart.length}</h2>
                    <Text>Total:</Text>
                    <Text fontSize="2xl">&#8377;{totalPrice.toFixed(2)}</Text>
                  </Box>
                </Flex>
                <HStack mt={8}>
                  <Link to={"/checkout"}>
                    <Button variant="solid" colorScheme="blue">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    colorScheme="gray"
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </Button>
                </HStack>
              </>
            ) : (
              <Center>
                <Text fontSize="xl">Your cart is empty</Text>
              </Center>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default AddCart;
