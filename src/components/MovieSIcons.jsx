import { Box, Container, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const movieSIcons = ({title, poster_path,vote_average}) => {
  return (
  <Container w={"100%"} bgColor={""} h={'fit-content'} display={"flex"} justifyContent={"flex-start"} justifyItems={"flex-start"}>
    
        <HStack w={"100%"} h={'fit-content'} >
          <Box w={"180px"} bgColor={""} display={'flex'} justifyContent={"flex-start"}>
            <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            w={"180px"} h={"220px"} borderRadius={10}
            />
          </Box> 
          <VStack  w={"200px"} bgColor={""} h={"fit-content"} marginLeft={10} display={"flex"} justifyContent={"flex-start"}>
                <Box w={"100%"}>
                <Text as={"span"}>{title}</Text>
                </Box>
                <Box display={'flex'} justifyContent={"flex-start"} w={"100%"}>
                    {vote_average.toFixed(1)}/10
                </Box>
          </VStack>
        </HStack>

  </Container>
  )
}

export default movieSIcons