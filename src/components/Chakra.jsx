import { Box, 
    Button, 
    Container, 
    Heading, 
    HStack, 
    Text, 
    useColorModeValue } from '@chakra-ui/react'


export const Chakra = () => {

    const color = useColorModeValue("white.400")
   
    return (
      <>
        <Box id="inicio" h="100vh" bg={ color } p="5">

            <Box mt="38">
                <Container centerContent maxW="600" fontWeight={400}>
                    <Heading as={"h2"} fontSize={["45", "60"]} textAlign={"center"}>
                    Create accessible React apps <Text color="teal.400">with speed</Text>
                    </Heading>
                    <Text color="gray.500" mt="2" fontWeight="400" fontSize="20" textAlign="center">
                    Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
                    </Text>
                    <HStack mt="5">
                    <Button colorScheme='teal' size="lg">Get Started</Button>
                    <Button colorScheme="gray" size="lg">Github</Button>
                    </HStack>
                </Container>
            </Box>
        </Box>
      </>

  )
}
