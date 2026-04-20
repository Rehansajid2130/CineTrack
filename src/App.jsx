import { Container, HStack, Text ,VStack ,Button ,Input , Image} from '@chakra-ui/react'
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

const App = () => {
  const [Data, setData] = useState()

  return (
  <Container w={"100%"} bgColor={""} display={"flex"} flexWrap={"wrap"}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/ExplorePage" element={<ExplorePage />}/>
      <Route path='MoviePage' element={<MoviePage />} />
      <Route path='Category' element={<Category />} />
    </Routes>
    </BrowserRouter>
    
    {/* <MovieList /> */}

    <Footer />
  </Container>
  )
}

export default App