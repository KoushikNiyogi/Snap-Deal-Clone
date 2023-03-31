import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Flex, FormControl, FormLabel, Input, Textarea, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
// import { Progress } from '@chakra-ui?/react'
// import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {
  Progress,
  ProgressLabel,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/progress"
import { LinearProgress } from '@mui/material'
const Address = () => {

    const addre={
        pincode:"",
        name:"",
        address:"",
        locality:"",
        city:"",
        state:"",
        mob:""
    }
    const [prog,setProg]=useState(0)
    const loc=useRef()
    const [add,setadd]=useState(addre);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handlechange=(e)=>{
          
        const {name,value}=e.target;

        setadd({...add,[name]:value});   
    }
    const handleFocus=(e)=>{
      setProg((prev)=>prev+14.28)
    }
    const handlesubmit=(e)=>{
      const {pincode,name,address,locality,city,state,mob}=add;
     if(pincode=="" || name=="" || address=="" || locality=="" || city=="" || state==""){
         alert("please enter all details");
       
     }
     else if(mob.length!==10){
        
        onOpen();
     }

     else{

         localStorage.setItem("address",JSON.stringify(add));
          setadd(addre)
     }
     setProg(0)
 }
  return (
    <div >    
<Box  color="gray" width="70%"  p={120}>
{/* <LinearProgress variant="buffer" value={80} valueBuffer={buffer} />   */}
<CircularProgress size={80} marginTop={20} marginBottom={50} value={prog} /> 
<p marginTop="1.5em"></p>

     <FormControl >
    <Flex justifyContent="space-between" gap={5}>
    <FormLabel  height="40px" width="70%">Pincode</FormLabel>
    <Input placeholder='Pin Code' name='pincode' value={add.pincode} onFocus={handleFocus}   onChange={handlechange} type="number" />
    </Flex>

    <Flex justifyContent="space-between" gap={5} mt={2}>
    <FormLabel  height="40px" width="70%">Name</FormLabel>
    <Input placeholder='Full Name' name='name' value={add.name} onFocus={handleFocus} onChange={handlechange} type="text" />
    </Flex>

    <Flex justifyContent="space-between" gap={5} mt={2}>
    <FormLabel  height="40px" width="70%">Address</FormLabel>
    <Textarea placeholder='Flat/House No. Colony/Street No.' name='address' onFocus={handleFocus} value={add.address} onChange={handlechange} type="text" />
    </Flex>

    <Flex justifyContent="space-between" gap={5} mt={2}>
    <FormLabel  height="40px" width="70%">Locality/Landmark</FormLabel>
    <Input placeholder='Eg. Near Appolo Hospital' name='locality'  value={add.locality} onFocus={handleFocus} onChange={handlechange} type="text" />
    </Flex>

    <Flex justifyContent="space-between" gap={5} mt={2}>
    <FormLabel  height="40px" width="70%">City</FormLabel>
    <Input placeholder='City' name='city' value={add.city} onFocus={handleFocus} onChange={handlechange} type="text" />
    </Flex>

    <Flex justifyContent="space-between" gap={5} mt={2}>
    <FormLabel  height="40px" width="70%">State</FormLabel>
    <Input placeholder='State' name='state' value={add.state} onFocus={handleFocus}  onChange={handlechange} type="text" />
    </Flex>

    <Flex justifyContent="space-between" gap={5} mt={2}>
    <FormLabel  height="40px" width="70%">Mobile Number</FormLabel>
    <Input placeholder='Mobile No.' name='mob' value={add.mob} onFocus={handleFocus} onChange={handlechange} type="number" />
    </Flex>

    

    <button onClick={handlesubmit} style={{marginTop:"32px", backgroundColor:"#E40046", color:"white", padding:"8px",borderRadius:"7px"}} >SAVE AND CONTINUE</button>
    <AlertDialog
        isOpen={isOpen}
        
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Invalid mobile number
            </AlertDialogHeader>

            <AlertDialogBody>
             Please Enter 10 digit mobile number.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button  onClick={onClose}>
                Cancel
              </Button>
              
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

   </FormControl>

   </Box>
   </div>
  )
}

export default Address