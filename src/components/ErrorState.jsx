import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'

const ErrorState = () => {
  return (
    <Container w={"100%"} h={"100vh"} alignContent={"center"} justifyItems={"center"}>
        <Box w={"100%"} justifyContent={'center'} display={"flex"} >
           <Text as={"span"} fontSize={25} fontWeight={700} >
            There's been an Error While Fetching Data
           </Text>
        </Box>

    </Container>
  )
}

export default ErrorState