import { Box, Button, Grid, GridItem, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'

export const Chakra3 = () => {

    const bgColor = useColorModeValue("gray.50", "white.800");


  return (
    <Box id="planes" bg="white.400" overflow="hidden" maxW="100vw" textAlign="center" p="5">
        <Heading as="h3" >Planes disponibles</Heading>
        <Grid rowGap="5" mt="20" templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} w={["95%", "80%"]} mx="auto">
            <GridItem textAlign="center" w="100%">
                <Box bg={bgColor} h="100%" w={["90%", "80%"]} mx="auto" p="5" border="1px">
                    <Image src="imagenes/motivation.svg" />
                    <Text>
                    Simplify the development of your multi-container applications from Docker CLI to Amazon ECS on AWS Fargate
                    </Text>
                    <Button colorScheme="blue" mt="10">
                    Get Started
                    </Button>
                </Box>
            </GridItem>

            <GridItem textAlign="center">
                <Box bg={bgColor} h="100%" w={["90%", "80%"]} mx="auto" p="5" border="1px">
                    <Image src="imagenes/motivation.svg" />
                    <Text>
                    Simplify the development of your multi-container applications from Docker CLI to Amazon ECS on AWS Fargate
                    </Text>
                    <Button colorScheme="blue" mt="10">
                    Get Started
                    </Button>
                </Box>
            </GridItem>

            <GridItem textAlign="center">
                <Box bg={bgColor} h="100%" w={["90%", "80%"]} mx="auto" p="5" border="1px">
                    <Image src="imagenes/motivation.svg" />
                    <Text>
                    Simplify the development of your multi-container applications from Docker CLI to Amazon ECS on AWS Fargate
                    </Text>
                    <Button colorScheme="blue" mt="10">
                    Get Started
                    </Button>
                </Box>
            </GridItem>
        </Grid>
    </Box>
  )
}
