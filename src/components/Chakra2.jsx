import { Box, 
  UnorderedList, 
  ListItem, 
  Heading, 
  Image, 
  useColorModeValue } from "@chakra-ui/react"


export const Chakra2 = () => {

  const bgColor = useColorModeValue("gray.100", "white.800");
  const color = useColorModeValue("white.400", 'white.400');


  return (
        <Box id="about" maxW="100vw" bg={bgColor} display="flex" flexDirection="column" >
            <Box overflow="hidden" textAlign="center" h="auto" mt="15" display="flex" gap="8" flexDirection="column" alignItems="center"  w="100%" >
              <Heading mt="2" maxW="2lg" as="h1" color={color} fontSize={["29", "38"]}>Accelerate how you build, share, and run modern applications.</Heading>
            </Box>

            <Box   overflow="hidden" w="100%"  mt="20">
              <Box  display="flex" flexDirection={["column", "row"]} w="80%" mx="auto">
                <Box>
                <Heading as="h5">Build</Heading>
                <UnorderedList mt="2">
                  <ListItem>
                  Get a head start on your coding by leveraging Docker images to efficiently develop your own unique applications on Windows and Mac.  Create your multi-container application using Docker Compose.
                  </ListItem>
                  <ListItem>
                  Integrate with your favorite tools throughout your development pipeline – Docker works with all development tools you use including VS Code, CircleCI and GitHub.
                  </ListItem>
                  <ListItem>
                  Package applications as portable container images to run in any environment consistently from on-premises Kubernetes to AWS ECS, Azure ACI, Google GKE and more.
                    </ListItem>
                </UnorderedList>
                </Box>
                <Image src="imagenes/motivation.svg" />
              </Box>

              <Box mt={["20", "0"]} display="flex" flexDirection={["column", "row"]} w="80%" mx="auto">
                <Image src="imagenes/motivation.svg" />
                <Box>
                <Heading>Build</Heading>
                <UnorderedList mt="2">
                  <ListItem>
                  Get a head start on your coding by leveraging Docker images to efficiently develop your own unique applications on Windows and Mac.  Create your multi-container application using Docker Compose.
                  </ListItem>
                  <ListItem>
                  Integrate with your favorite tools throughout your development pipeline – Docker works with all development tools you use including VS Code, CircleCI and GitHub.
                  </ListItem>
                  <ListItem>
                  Package applications as portable container images to run in any environment consistently from on-premises Kubernetes to AWS ECS, Azure ACI, Google GKE and more.
                    </ListItem>
                </UnorderedList>
                </Box>
              </Box>

              <Box  mt={["20", "0"]} display="flex" flexDirection={["column", "row"]} w="80%" mx="auto">
                <Box>
                <Heading>Build</Heading>
                <UnorderedList mt="2">
                  <ListItem>
                  Get a head start on your coding by leveraging Docker images to efficiently develop your own unique applications on Windows and Mac.  Create your multi-container application using Docker Compose.
                  </ListItem>
                  <ListItem>
                  Integrate with your favorite tools throughout your development pipeline – Docker works with all development tools you use including VS Code, CircleCI and GitHub.
                  </ListItem>
                  <ListItem>
                  Package applications as portable container images to run in any environment consistently from on-premises Kubernetes to AWS ECS, Azure ACI, Google GKE and more.
                    </ListItem>
                </UnorderedList>
                </Box>
                <Image src="imagenes/motivation.svg" />
              </Box>
            </Box>
        </Box>
    )
}