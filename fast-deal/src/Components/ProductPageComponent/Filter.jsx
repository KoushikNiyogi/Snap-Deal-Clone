import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  CheckboxGroup,
  Checkbox,
  Stack,
  Flex,
  RadioGroup,
  Radio
} from '@chakra-ui/react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
const shoes = [
  ["Rating", [{ text: "0-1", value: "0-1" }, { text: "1-2", value: "1-2" }, { text: "2-3", value: "2-3" }, { text: "3-4", value: "3-4" }, { text: "4-5", value: "4-5" }]],
  ["color", [{ text: "Black", value: "Black" }, { text: "Blue", value: "Blue" }, { text: "Brown", value: "Brown" }, { text: "Orange", value: "Orange" }]]
]
const Filter = () => {
  const [filterState, setFilter] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name == "rating.rate") {
      value = value.split("-");
    }
    let params = {}
    if(name == "rating.rate"){
      params.name_gte = value[0];
      params.name_lte = value[1];
    }
    console.log(params);
  }


  return (
    <Box w={"20%"}>
      <Accordion allowMultiple>
        {
          shoes.map((item) => {
            return <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        {item[0]}
                      </Box>
                      {isExpanded ? (
                        <AiOutlineMinus fontSize='12px' />
                      ) : (
                        <AiOutlinePlus fontSize='12px' />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {item[0] == "Rating" ? <RadioGroup >
                      <Stack>
                        {
                          item[1].map((elm) => {

                            return <Radio name={"rating.rate"} value={elm.value} onChange={handleChange}>{elm.text}</Radio>
                          })
                        }
                      </Stack>
                    </RadioGroup> :
                      <CheckboxGroup >
                        <Stack spacing={5} direction={"column"}>
                          {
                            item[1].map((elm) => {

                              return <Checkbox name={item[0]} value={elm.value} onChange={handleChange}>{item[0] === "color" ? <Flex alignItems={"center"}><Box mr={"10px"} height={"10px"} width={"10px"} backgroundColor={elm.value}></Box>{elm.text}</Flex> : <>{elm.text}</>}</Checkbox>
                            })
                          }
                        </Stack>
                      </CheckboxGroup>
                    }
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          })
        }
      </Accordion>
    </Box>
  )
}

export default Filter