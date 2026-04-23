import { Box, Button, Container, Text,HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { genre, Discovergenre } from './api'
import MovieIcon from "./MovieIcon"
import LoadingState from './LoadingState'
import ErrorState from './ErrorState'


const Category = () => {

    const [Catogries, setCatogries] = useState("")
    const [CatMovies, setCatMovies] = useState("")
    const [CatClick, setCatClick] = useState("")
    const [CatName, setCatName] = useState("Discover")
    const [PageNo, setPageNo] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        try {
            setIsLoading(true)
            setIsError(false)
            genre()
                .then(gen => setCatogries(gen))
            Discovergenre(CatClick,PageNo)
                .then(genr => setCatMovies(genr))

             setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsError(true)
        }
    }, [CatClick,PageNo])
    console.log(CatMovies);
    // console.log(Catogries);

    const paging = (num) => {
        if(num === 1)
        {
            if(PageNo<CatMovies.total_pages)
            setPageNo(prev=> prev+1)
        }
        else{
            if(PageNo>1)
            setPageNo(prev=>prev-1)
        }
    }
    if(isLoading) return <LoadingState />
    if(isError)    return <ErrorState />
    return (
        <Container>
            <Navbar />
            <Box display={"flex"} flexWrap={'wrap'} w={"100%"} padding={10} gap={5}>
                {
                    Catogries?.genres?.map((genres, index) => {
                        return (
                            <Box key={index}>
                                <Button w={"fit-content"} padding={5} onClick={() => {
                                    setCatClick(genres.id)
                                    console.log(CatClick);
                                    setPageNo(1)
                                    setCatName(genres.name)
                                    setIsLoading(true)
                                }}>
                                    {genres.name}
                                </Button>
                            </Box>
                        )
                    })
                }
            </Box>
            <Text>Catogery:{CatName}</Text>
            <Box  display={"flex"} bgColor={""} flexWrap={"wrap"} width={"100%"}
            pl={10}
            >
                <Box display={"flex"} flexWrap={'wrap'} gap={5}>
                    {
                        CatMovies?.results?.slice(0, 18).map((CatMovies, index) => {
                            return (
                                <Box key={index}>
                                    <MovieIcon title={CatMovies.title}
                                        vote_average={CatMovies.vote_average}
                                        poster_path={CatMovies.backdrop_path}
                                    />
                                </Box>
                            )
                        })
                    }
                </Box>

            </Box>
            

            <HStack w={"100%"} bgColor={""} display={"flex"} justifyContent={"center"}>
                    <Box>
                    <Button onClick={()=>{
                        paging(2)
                    }}>
                        Previous
                    </Button>
                    </Box>
                    <Box>
                        {PageNo}
                    </Box>
                    <Box>
                    <Button onClick={()=>{
                        paging(1)
                    }}>
                        Next
                    </Button>
                    </Box>
                </HStack>
        </Container>
    )
}

export default Category