import { Container, HStack, VStack, Text, Button, Portal, Menu, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Searched } from './api'



const Navbar = () => {

  return (

    <Container display={"flex"} justifyContent={"space-around"} w={"100%"} bgColor={""}>
      <HStack>
        <VStack>

          <Text as={"span"} fontSize={"40px"} fontWeight={700} padding={0}>
            <Link to={"/"}>CINETRACK</Link>
          </Text>
        </VStack>
       </HStack>

    </Container>
  )
}

export default Navbar