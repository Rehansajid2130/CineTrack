import { Box, Button, Container } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { genre } from './api'


const Category = () => {

    const [Catogries, setCatogries] = useState("")
    useEffect(()=>{
        genre()
        .then(gen => setCatogries(gen))
    },[])
    console.log(Catogries);
  return (
    <Container>
        <Navbar />
        <Box display={"flex"} flexWrap={'wrap'} w={"100%"} padding={10} gap={5}>
            {
                Catogries?.genres?.map((genres,index)=>{
                    return(
                        <Box key={index}>
                            <Button w={"fit-content"} padding={5}>
                        {genres.name}
            </Button>
                        </Box>
                    )
                })
            }
        </Box>
    </Container>
  )
}

export default Category