import { Box, Flex, Image } from "@chakra-ui/react";
import { LOADER_URL } from "../../Constants/constants";
import {
  AUTO,
  CENTER,
  FILL_10PARENT,
  FILL_PARENT,
  FIXED,
  WHEAT,
  WHITE,
} from "../../Constants/typography";
import my_pixel from "../../scripts/my_pixel";

export default function Loader({ gif }) {
  return (
    <Flex
      top={my_pixel(120)}
      bg={WHITE}
      justify={CENTER}
      alignItems={CENTER}
      w={FILL_PARENT}
      position={FIXED}
      h={FILL_PARENT}
      zIndex={10}
    >
      <Image w={my_pixel(100)} src={gif}></Image>
    </Flex>
  );
}
