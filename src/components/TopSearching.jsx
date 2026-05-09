import { Container, HStack, VStack, Box, Button, Portal, Menu, Input } from '@chakra-ui/react'
import {  useNavigate } from 'react-router-dom'

const TopSearching = ({ setCatogery, setSearched, setPageNo,TrendingMv}) => {
    const navigate = useNavigate()
    return (
        <Container w={"100%"} bgColor={""} h={"fit-content"} display={"flex"} justifyContent={"space-around"}>
            <HStack w={"10%"} bgColor={""} h={"fit-content"} >
                <Menu.Root>
                    <Menu.Trigger asChild>
                        <Button variant="outline" size="lg" w={"100%"}>
                            Movies
                        </Button>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <Menu.Content >
                                <Menu.Item value="TopRated" onClick={
                                    () => {
                                        setCatogery("TopRated")
                                        setPageNo(1)
                                    }}
                                >Top Rated</Menu.Item>
                                <Menu.Item value="Discover" onClick={() => {
                                    setCatogery("Discover")
                                    setPageNo(1)
                                }
                                }>Discover</Menu.Item>
                                <Menu.Item value="Popular" onClick={() => {
                                    setCatogery("Popular")
                                    setPageNo(1)
                                }
                                }>Popular</Menu.Item>
                            </Menu.Content>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
                <Button onClick={() => {
                    navigate("/Category")
                }}>Categories
                </Button>
            </HStack>
            <HStack w={"40%"} bgColor={""}>

            <Button onClick={()=>{
            setSearched(true)
            navigate("/SearchPage", { state: { trendingMv: TrendingMv } })
        }}>
            Click
            </Button>
            </HStack>
        </Container>
    )
}

export default TopSearching