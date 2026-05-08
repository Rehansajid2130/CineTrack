import { Box, Container, Input, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MovieIcon from './MovieIcon'
import { Searched,Trending} from './api'
import { Link } from 'react-router-dom'

const SeachPage = () => {
    const [Data, setData] = useState("")
    const [Search, setSearch] = useState("")
    const [TrendingMv, setTrendingMv] = useState("")
    const [Searching, setSearching] = useState(false)
    
    useEffect(()=>{
        ChangingBool()
        Trending(1).then(trend => setTrendingMv(trend))
        const searching = () =>{
            if(Searching){
                Searched(Search,1).then(sech => setData(sech))
          }
        }

        console.log(Data);
        searching()
    },[Search])
 
    const ChangingBool = () =>{
        if(Search === "" || Search === null)
        {
            setSearching(false)
        }
        else{
            setSearching(true)
        }
    }
    return (

    <Container bgColor={""} w={"100%"} h={"100vh"}>
        <VStack bgColor={""} display={"flex"} alignItems={"center"} justifyContent={"center"}   
        width={"100%"} h={"100%"} >
            <Box>
                <Box>

                <Text as={"span"} fontSize={70}>
                        Discover
                </Text>
                </Box>
                <Box>
                    <Text as={"span"}  fontSize={20}>
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
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}
                />
            </Box>
            <Box>
                <Text>
                    {Searching? Search : "Trending"}
                </Text>
            </Box>
            <Box display={"flex"} flexWrap={'wrap'}>

                {Searched ?

                    Data?.results?.slice(0,18).map((Data,index)=>{
                       return(
                        <Link key={index} to={`/MoviePage/${Data.id}`}>
                      <MovieIcon title={Data.title} poster_path={Data.poster_path} vote_average={Data.vote_average}/>
                  </Link> 
                           )
                      })
    :
                        TrendingMv?.results?.slice(0,18).map((TrendingMv,index)=>{
                            return(
                            <Link key={index} to={`/MoviePage/${Data.id}`}>
                        <MovieIcon title={TrendingMv.title} poster_path={Data.poster_path} vote_average={Data.vote_average}/>
                    </Link> 
                                )
                        })}
                        
                                </Box>
        </VStack>
    </Container>
)
}
export default SeachPage