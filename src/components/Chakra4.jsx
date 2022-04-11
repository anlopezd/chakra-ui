import { Box, Button, FormControl, Textarea, FormLabel, Heading, Image, Input, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const Chakra4 = () => {

    const bgColor = useColorModeValue("gray.100", "white.800");

  return (
      <Box mt="20px" bg={bgColor} h="100vh" maxW="100vw" overflow="hidden">
           <Heading mt="5" as="h3" textAlign="center">
                    ¿Interesado? Contáctame
            </Heading>
        <Box mt="10" w="100%" h="100%" display="flex" alignItems="center" justifyContent="center">  
           
            <Box w={["100%", "50%"]} h="100%" display="flex" justifyContent="center">
            <form style={{width: "70%", marginTop: "20px"}}>
                <FormControl isRequired>
                    <FormLabel htmlFor='nombre'>Nombre</FormLabel>
                    <Input bg="white" id="nombre" placeholder="Ingresa tu nombre" />
                </FormControl>
                <FormControl mt="5" isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input bg="white" type="email" id="nombre" placeholder="Ingresa tu email" />
                </FormControl>
                <FormControl mt="5" isRequired>
                    <FormLabel htmlFor='email'>Numero</FormLabel>
                    <Input bg="white" type="email" id="nombre" placeholder="Ingresa tu numero" />
                </FormControl>
                <FormControl mt="5">
                    <FormLabel htmlFor='asunto'>Mensaje</FormLabel>
                    <Textarea isRequired bg="white" id="asunto" placeholder='¿Qué desea saber?' resize="none" />
                </FormControl>
                <Button mt="10" w="100%" border="1px" type="submit" >
                    Enviar
                </Button>
            </form>
            </Box>
            <Image display={["none", "block"]}  mb="120" src="imagenes/motivation.svg" w="50%" h="70%" objectFit="cover" />
        </Box>
        </Box>
    )
}
