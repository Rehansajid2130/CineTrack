import { Container, HStack, VStack, Text, Button, Portal, Menu, Input,Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import MovieIcon from './MovieIcon'
import Navbar from './Navbar'
import { DiscoverMovies, TopRated, Trending, Searched } from './api'
import { Link } from 'react-router-dom'
import LoadingState from './LoadingState'
import ErrorState from './ErrorState'
import TopSearching from './TopSearching'


const ExplorePage = () => {

    const [Data, setData] = useState("")
    const [Catogery, setCatogery] = useState("Discover")
    const [Searching, setSearching] = useState(false)
    const [PageNo, setPageNo] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [SearchInput, setSearchInput] = useState("")


    useEffect(() => 
        {
        setIsLoading(true)
        setIsError(false)

        try {
            if(Searching)
            {
                setIsLoading(false)
            }
            if (Catogery === "Discover") {
                DiscoverMovies(PageNo)
                    .then(Discover => setData(Discover))
                console.log(Data);
            }
            else if (Catogery === "TopRated") {
                TopRated(PageNo)
                    .then(toprated => setData(toprated))
                console.log(Data);
            }
            else if (Catogery === "Popular") {
                Trending(PageNo)
                    .then(trending => setData(trending))
                console.log(Data);
            }
            else if(Searching){
                searchInputData(SearchInput,PageNo)
                setSearching(false)
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsError(true)
        }
        setIsLoading(false)
    }, [Catogery, Searching, PageNo])
    const searchInputData = (SearchInput,PageNo) => {
            setPageNo(1)
            Searched(SearchInput,PageNo).then(Searchput => setData(Searchput))
            console.log(SearchInput);
            console.log("Running search");
            setIsLoading(false)
    }

    const paging = (num) => {
        if (num === 1) {
            if (PageNo < Data.total_pages)
                setPageNo(prev => prev + 1)
        }
        else {
            if (PageNo > 1)
                setPageNo(prev => prev - 1)
        }
    }

    if (isLoading) return <LoadingState />
    if (isError) return <ErrorState />
    return (
        <Container w={"100%"} bgColor={""} display={"flex"} flexDir={"column"} >
            <Navbar />
      
        <TopSearching Catogery={Catogery} setCatogery={setCatogery} setSearching = {setSearching} setPageNo={setPageNo} setSearchInput={setSearchInput} SearchInput={SearchInput}             searchInputData={searchInputData} PageNo={PageNo} />
           
            <HStack>
                <Text as={"span"} marginLeft={"60px"} padding={"5px 10px"} bgColor={"pink"} borderRadius={5} fontSize={25}>
                    {Catogery} Movies
                </Text>
            </HStack>
            <HStack display={"flex"} bgColor={""} flexWrap={"wrap"} width={"100%"} padding={"60px"}>
                {Data?.results?.slice(0,18).map((Data, index) => {
                    return (
                        <VStack key={index} >
                            <Link key={Data.id} to={`/MoviePage/${Data.id}`}>
                            <MovieIcon title={Data.title ?? Data.name} vote_average={Data.vote_average} poster_path={Data.poster_path} />
                </Link>
                        </VStack>
                    )
                })}
            </HStack>
                <HStack w={"100%"} bgColor={""} display={"flex"} justifyContent={"center"}>
                    <Box>
                    <Button onClick={()=>{
                        paging(2)
                    }}>
                        Previous
                    </Button>
                    </Box>
                    <Box>
                        {PageNo}/{Data.total_pages}
                    </Box>
                    <Box>
                    <Button onClick={()=>{
                        paging(1)
                    }}>
                        Next
                    </Button>
                    </Box>
                </HStack>
        </Container >
    )
}

export default ExplorePage