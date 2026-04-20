import { Box, Container, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Container mt={20} w={"100%"} h={"60vh"} bgColor={""} >
       <VStack w={"100%"}>
        <HStack w={"100%"}display={"flex"} justifyContent={'center'}>
            <Text as={"span"} fontSize={40} fontWeight={800} margin={10}>
                CINTRACK
            </Text>
        </HStack>
            <Box w={'100%'} display={"flex"} flexDir={"column"}>
                <Box  w={'100%'} >

                <Text as={"h1"} fontSize={30} w={'100%'} bgColor={""} justifyContent={'center'}display={"flex"}>
                Copyright © 2026 - Soap2day
                </Text>
                </Box>
                <Box>

                <Text as={"h1"} fontSize={20} w={'100%'} justifyContent={'center'} display={"flex"}>
Watch thousands of free HD movies and TV shows online at Cintrack42r5. No registration, no ads – just click and stream instantly.
                </Text>
                </Box>
            </Box>
       </VStack>
    </Container>
  )
}

export default Footer