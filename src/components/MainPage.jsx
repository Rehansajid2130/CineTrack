import { Container, HStack, Text, VStack, Button, Input, useStatStyles } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'    
import { useState } from 'react'

const MainPage = () => {
  const navigate = useNavigate()
  const [Search, setSearch] = useState("")

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
        <HStack w={"50%"}>
          <Input type="text"
            placeholder='Search'
            value={Search}
            onChange={(e)=>{
            setSearch(e.target.value)
            }}
          />
          <Button onClick={()=>{
            if(Search === ""){
              return
            }
            else{
              navigate(`/ExplorePage?q=${encodeURIComponent(Search)}`)
            }
          }}>
            Search
          </Button>
        </HStack>
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