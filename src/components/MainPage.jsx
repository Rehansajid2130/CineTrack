import { Container, HStack, Text, VStack, Button, Input } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import ExplorePage from './ExplorePage'
import Navbar from './Navbar'
import { genre } from './api'
const MainPage = () => {
  const navigate = useNavigate()

  return (
    <Container gap={"100px"} display={"flex"} flexDir={"column"}>
      <VStack>  
        <VStack>
          <Text as={"span"} fontSize={150} fontWeight={900}>
            CINETRACK
          </Text>
          <Text as={"span"}>
            Search your favrt movies
          </Text>
        </VStack>
      </VStack>
      <VStack w={"100%"} bgColor={""} gap={"40px"}>
        <VStack w={"50%"}>
          <Input type="text"
            placeholder='Search'
          />
        </VStack>
        <HStack >
          <Button onClick={() => {
            navigate("/ExplorePage")
          }}>Explore</Button>
          <Button onClick={()=>{
            navigate("/Category")
          }}>Categories</Button>
        </HStack>
      </VStack>
    </Container>
  )
}


export default MainPage