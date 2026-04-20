import { Container, HStack, Icon, VStack,Image, Text } from '@chakra-ui/react'
import Navbar from './Navbar'

const MovieIcon = ({title , vote_average ,poster_path}) => {
  return (
    <Container w={"200px"} alignItems={"center"} wordWrap={"break-word"} maxH={"400px"} justifyContent={"center"} position={"relative"} bgColor={""} h={"350px"} wordBreak={"break-word"} textAlign={"center"} > 
      
    <VStack position={"absolute"} bgColor={"black"} p={"5px 10px" } alignItems={"flex-end"} display={"flex"} right={"1px"} top={"1px"} borderRadius={"9px"} fontSize={12} fontWeight={700}>

      {vote_average.toFixed(1)}
    </VStack>
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        w={"200px"}
        h={"300px"}
        borderRadius={"10px"}
        display={"block"}
        objectFit={"cover"}
      />
      <Text as={"span"} fontSize={15} fontWeight={700} >
        {title}
      </Text>
    </Container>
  )
}

export default MovieIcon