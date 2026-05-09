import { Box, Container, Input, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MovieIcon from './MovieIcon'
import { Searched, Trending } from './api'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import Navbar from './Navbar'

const SeachPage = ({TrendingMv:TrendingMv}) => {
    const [Data, setData] = useState("")
    const [Search, setSearch] = useState("")
    const [SearchHappening, setSearchHappening] = useState(false)
    const location = useLocation();
     TrendingMv = TrendingMv ?? location.state?.trendingMv;

     let [searchParam,setsearchParam] = useSearchParams()
    let q = searchParam.get("q");
    
    

    useEffect(() => {
        CheckParams()
        ChangingBool()
        // Trending(1).then(trend => setTrendingMv(trend))
        const searching = () => {
            if (SearchHappening) {
                Searched(Search, 1).then(sech => setData(sech))
            }
        }
     
        searching()
    }, [Search])

    const ChangingBool = () => {
        if (Search === "" || Search === null) {
            setSearchHappening(false)
        }
        else {
            setSearchHappening(true)
        }
    }
    const CheckParams = () =>{
        if(q)
        {
            setSearch(q)
            console.log(q);
            Searched(Search, 1).then(sech => setData(sech))
            console.log(Data);
            setsearchParam("")
        }
    }
    return (

        <Container bgColor={""} w={"100%"} h={"fit-content"}>
            <Navbar />
            <VStack bgColor={""} display={"flex"} alignItems={"center"} justifyContent={"center"}
                width={"100%"} h={"100%"} >
                <Box>
                    <Box>

                        <Text as={"span"} fontSize={70}>
                            Discover
                        </Text>
                    </Box>
                    <Box>
                        <Text as={"span"} fontSize={20}>
                            Find your next favorite movie or TV show from millions of titles
                        </Text>
                    </Box>
                </Box>
                <Box w={"100%"} alignContent={"center"} justifyContent={"center"} display={"flex"} bgColor={""}>
                    <Input
                        type='text'
                        placeholder='Enter Movie name'
                        w={"50%"}
                        value={Search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    />
                </Box>
                <Box>
                    <Text>
                        {SearchHappening ? Search : "Trending"}
                    </Text>
                </Box>
                <Box display={"flex"} flexWrap={'wrap'} gap={10} justifyContent={'center'}>

                    {SearchHappening ?
                        Data?.results?.slice(0,20).map((Data, index) => {
                            return (
                                <Link key={index} to={`/MoviePage/${Data.id}`}>
                                    <MovieIcon title={Data.title} poster_path={Data.poster_path || Data.backdrop_path} vote_average={Data.vote_average} />
                                </Link>
                            )
                        })
                        :
                        TrendingMv?.results?.slice(0,20).map((TrendingMv, index) => {
                            return (
                                <Link key={index} to={`/MoviePage/${TrendingMv.id}`}>
                                    <MovieIcon title={TrendingMv.title || TrendingMv.original_title || TrendingMv.original_name} poster_path={TrendingMv.poster_path} vote_average={TrendingMv.vote_average} />
                                </Link>
                            )
                        })}

                </Box>
            </VStack>
        </Container>
    )
}
export default SeachPage