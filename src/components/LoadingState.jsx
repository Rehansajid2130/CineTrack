import { Box, Container, Spinner } from '@chakra-ui/react'
import React from 'react'

const LoadingState = () => {
  return (
   <Container w={"100%"} h={"100vh"} alignContent={"center"} justifyItems={"center"}>
    <Box >
        Loading
        <Spinner size={"xl"}  color={"teal"}/>
    </Box>
   </Container>
  )
}

export default LoadingState