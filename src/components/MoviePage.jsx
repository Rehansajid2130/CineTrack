import { Container, HStack, VStack, Image, Text, Flex, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { MovieDetails, RelatedMovies, MovieReviews,MovieRecommond } from './api'
import MovieIcon from './MovieIcon'
import MovieSIcon from './MovieSIcons'
import ReviewCard from './ui/ReviewCard'

const MoviePage = () => {
    const [Data, setData] = useState("")
    const [Similar, setSimilar] = useState("")
    const [Reviews, setReviews] = useState("")
    const [Recommend, setRecommend] = useState("")
    const id = 550;
    useEffect(() => {
        MovieDetails(id).then(id => setData(id))
        RelatedMovies(id).then(siml => setSimilar(siml))
        MovieReviews(id).then(rev => setReviews(rev))
        MovieRecommond(id).then(recom => setRecommend(recom))

    }, [])
    console.log(Data);
    
    return (
        <Container bgColor={""} w={"100%"} mx={'auto'} maxW={"1300px"} h={'fit-content'} >
            <Navbar />
            <Box bgColor={"pink"} w={"1300px"} h={"400px"} bgImage={Data.backdrop_path ? `url(https://image.tmdb.org/t/p/w500${Data.backdrop_path})` : undefined} bgSize={'cover'} bgPos={'center'} bgRepeat={"no-repeat"} borderRadius={7} marginTop={10}>

                <VStack alignItems={"flex-start"} display={'flex'} flexDirection={"row"} padding={10}
                    bgColor={""} bg="blackAlpha.700" h={400}>


                    <VStack >
                        <Image src={`https://image.tmdb.org/t/p/w500${Data.poster_path}`} alt='hhehe'
                            bgColor={""} w={"300px"} h={'320px'}
                            borderRadius={"10px"}
                        />
                    </VStack>
                    <HStack padding={5} flexDirection={"column"} bgColor={""} alignItems={"flex-start"}>
                        <HStack flexDirection={"column"} alignItems={"flex-start"}>

                            <Text as={"span"} fontSize={35} fontWeight={700}>
                                {Data.original_title}
                            </Text>
                            <Text >
                                {Data.title}

                            </Text>
                        </HStack>
                        <HStack alignItems={"flex-start"}
                            w={300} bgColor={""} justifyContent={"space-between"}>

                            <Text>Rating :7</Text>
                            <Text>2h 22m</Text>
                            <Text>{Data.release_date?.slice(0, 4)}</Text>
                            <Text>HD</Text>
                        </HStack>
                        <HStack bgColor={""} w={"920px"} textAlign={"justify"}><Text fontSize={18} fontWeight={500}>
                            {Data.overview}</Text></HStack>
                        <HStack w={"fit-content"} >

                            {Data.genres?.map((genres, index) => {
                                return (
                                    <Text key={genres.id ?? index}>
                                        Genre :{genres.name}
                                    </Text>
                                )
                            })}
                        </HStack>
                        <HStack>
                            <Text>Language :{Data.original_language}</Text>
                        </HStack>
                        <HStack>
                            <Text>release_date :{Data.release_date}</Text>
                        </HStack>
                    </HStack>
                </VStack>
            </Box>

            <Box marginTop={20}>
                <Text as={"span"} fontSize={30} fontWeight={700}>
                    Related Movies
                </Text>
                <HStack>
                    <HStack gap={5} w={"100%"} >
                        {Similar.results?.slice(0, 6).map((Similar, index) => {
                            return (
                                <Box key={index} >
                                    <MovieIcon title={Similar.original_title}
                                        vote_average={Similar.vote_average}
                                        poster_path={Similar.poster_path}
                                    />
                                </Box>
                            )
                        })}</HStack>
                </HStack>
            </Box>

            <Box w={"100%"} marginTop={20}>
                <Image src={`https://image.tmdb.org/t/p/w500${Data.backdrop_path}`}
                    w={"100%"} h={"fit-content"} objectFit={"cover"}
                />
            </Box>


            <Box w={"100%"} h={"fit-content"} display={"flex"} flexDir={"row"} bgColor={""} marginTop={20}>

                    <Box w={"60%"} bgColor={""} display={'flex'} flexDirection={"column"} gap={10} marginLeft={4}>

                {Reviews.results?.slice(0, 5).map((Reviews, index) => {
                    return (
                        <Box key={index}>
                            <ReviewCard avatar_path={Reviews.author_details.avatar_path}
                                username={Reviews.author_details.username}
                                created_at={Reviews.created_at}
                                content={Reviews.content}
                                rating={Reviews.author_details.rating}
                                />
                        </Box>
                    )
                })}
                </Box>
                <HStack bgColor={""} w={"40%"} h={"fit-content"}  display={"flex"} flexDir={"column"}>
                    <Box bgColor={"black"} w={"80%"} alignItems={"center"} justifyContent={'center'} display={'flex'} padding={5} margin={2}>
                    <Text as={"span"} bgColor={"black"} fontSize={20} fontWeight={700} >
                        Most Viewed
                    </Text>
                    </Box>
                <HStack gap={5} w={"100%"} display={'flex'} flexDir={"column"} >
                        {Recommend.results?.slice(0, 4).map((Similar, index) => {
                            return (
                                <Box key={index} >
                                    <MovieSIcon title={Similar.original_title}
                                        vote_average={Similar.vote_average}
                                        poster_path={Similar.poster_path}
                                    />
                                </Box>
                            )
                        })}</HStack>
                </HStack>
            </Box>
        </Container>
    )
}
export default MoviePage