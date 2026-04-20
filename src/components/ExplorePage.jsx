import { Container, HStack, VStack, Text, Box, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import MovieIcon from './MovieIcon'
import Navbar from './Navbar'
import { DiscoverMovies, TopRated, Trending,Searched } from './api'


const ExplorePage = () => {

    const [Data, setData] = useState("")
    const [Catogery, setCatogery] = useState("Discover")
    const [Searching, setSearching] = useState(false)
    const [PageNo, setPageNo] = useState(1)
    useEffect(() => {
        console.log(Searching);
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
        console.log(Data);
        
        searchInputData()
    }, [Catogery , Searching , PageNo])
    console.log(Data);
    const searchInputData = () =>{
        if(Searching){
            
            Searched().then(Searchput => setData(Searchput))
            console.log("Running search");
        }
        console.log("Running search1");

    }

    const paging = (num) => {
        if(num === 1)
        {
            if(PageNo<Data.total_pages)
            setPageNo(prev=> prev+1)
        }
        else{
            if(PageNo>1)
            setPageNo(prev=>prev-1)
        }
    }
    return (
        <Container w={"100%"} bgColor={""} display={"flex"} flexDir={"column"} >
            <Navbar Catogery={Catogery} setCatogery={setCatogery} setSearching = {setSearching} setPageNo={setPageNo}/>
            <HStack>
                <Text as={"span"} marginLeft={"60px"} padding={"5px 10px"} bgColor={"pink"} borderRadius={5} fontSize={25}>
                    {Catogery} Movies
                </Text>
            </HStack>
            <HStack display={"flex"} bgColor={""} flexWrap={"wrap"} width={"100%"} padding={"60px"}>

                {Data?.results?.slice(0,18).map((Data, index) => {
                    return (
                        <VStack key={index} >
                            <MovieIcon title={Data.title ?? Data.name} vote_average={Data.vote_average} poster_path={Data.poster_path} />
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

export default ExplorePage