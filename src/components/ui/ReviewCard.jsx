import { Container, HStack, VStack ,Image, Text, Flex, Box} from '@chakra-ui/react'
import React, { useState } from 'react'
import profile from "../../assets/photos/CommentPic.svg"

const ReviewCard = ({avatar_path ,username,created_at,content,rating}) => {

  return (
    <Container>
         <HStack w={"100%"} bg={"#133964"} h={"fit-content"} display={'flex'}flexDir={"column"}  alignItems={"flex-start"} padding={5} borderRadius={10}>

<VStack display={'flex'} flexDir={"row"}w={"100%"} >
    <Box>

    <Image src={avatar_path ?`https://image.tmdb.org/t/p/w500/${avatar_path}`: profile}  alt="Profile" w={"69px"} borderRadius={50} h={"60px"} />
    </Box>
<HStack justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
    <Box>
    <Text fontSize={20} fontWeight={700}>{username}</Text>
    <Text as={"span"} fontSize={13}>{created_at?.slice(0.6)}</Text>
    </Box>
    <Box>
    <Text>Rating : {rating? rating :"Null"}</Text>
    </Box>
</HStack>
</VStack >
<Box><Text fontSize={15} lineClamp  ={3}>
{content}
</Text>
</Box>
</HStack>

    </Container>
  )
}

export default ReviewCard