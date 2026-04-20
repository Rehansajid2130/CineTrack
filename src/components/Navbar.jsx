import { Container, HStack, VStack,Text ,Button ,Portal ,Menu ,Input } from '@chakra-ui/react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Searched } from './api'



const Navbar = ({Catogery , setCatogery , setSearching,setPageNo}) => {

  const [SearchInput, setSearchInput] = useState("")
  const [Data, setData] = useState("")

  return (

    <Container display={"flex"} flexDirection={"space-around"}>
          <HStack>
            <VStack>

            <Text as={"span"} fontSize={"40px"} fontWeight={700} padding={0}>
                <Link to={"/"}>CINETRACK</Link>
            </Text>
            </VStack>
            <HStack>
                <Link to={"/"}> <Text as={"span"} fontSize={"23px"} fontWeight={700} bgColor={"pink "} padding={"2px 10px"} borderRadius={"8px"} >Home</Text></Link>
            </HStack>
            <HStack>
            <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Movies
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt" onClick={
              ()=>{
              setCatogery("TopRated")
                setPageNo(1)
            }}
              >Top Rated</Menu.Item>
            <Menu.Item value="new-file"onClick={()=>{
              setCatogery("Discover")
              setPageNo(1)
            }
            }>Discover</Menu.Item>
            <Menu.Item value="new-win"onClick={()=>{
              setCatogery("Popular")
              setPageNo(1)
            }
            }>Popular</Menu.Item>  
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
            </HStack>
            </HStack>
            <HStack>
              <Input placeholder='Enter Movie Name' 
              value={SearchInput}
              onChange={(e)=>{
               setSearchInput( e.target.value)
               console.log(SearchInput);
              }}
              />
              <Button onClick={()=>{
                Searched(SearchInput).then(Search => setData(Search))
                console.log(Data);
                setSearching(true)
              }}>Search</Button>
            </HStack>

    </Container>
)
}

export default Navbar