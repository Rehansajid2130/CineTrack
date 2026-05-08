import { Container, HStack, Text ,VStack ,Button ,Input , Image, Box} from '@chakra-ui/react'
import MainPage from './components/MainPage'
import MovieList from './components/MovieList'
import { useEffect, useState } from 'react'
import MovieIcon from './components/MovieIcon'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ExplorePage from './components/ExplorePage'
import "./App.css"
import MoviePage from './components/MoviePage'
import Footer from './components/Footer'
import Category from './components/Category'
import LoadingState from './components/LoadingState'
import ErrorState from './components/ErrorState'
import SearchPage from './components/SearchPage'

const App = () => {
  return (
  <Container w={"100%"} bgColor={""} display={"flex"} flexWrap={"wrap"}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/ExplorePage" element={<ExplorePage />}/>
      <Route path='MoviePage/:id' element={<MoviePage />} />
      <Route path='Category' element={<Category />} />
    </Routes>
    </BrowserRouter>
    <Box  w={"100%"} h={"100vh"} >

    </Box>

    {/* <MovieList /> */}
    <Footer />
  </Container>
  )
}

export default App