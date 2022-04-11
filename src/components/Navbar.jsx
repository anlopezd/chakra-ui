import {
  Button,
  Flex,
  HStack,
  Link,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

export const Navbar = () => {
  const { colorMode,toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("blue.700", "white.200");

  return (
    
      <Flex alignItems="center" h="80px" p="5" w="100%" position="sticky" top="0" bg={bgColor} zIndex="2">
        <Text mr="5" color={textColor} fontWeight="bold" fontSize={["16", "24"]}>
          Chakra Ui
        </Text>
        <Spacer display={["none", "block"]} />
        <HStack spacing="10px" display="flex" alignItems="center">
        <Link href="#inicio" fontSize={["15", "18"]}>
       Inicio
        </Link>
        <Link href="#about" fontSize={["15", "18"]}>
        About
        </Link>
        <Link href="#planes"  fontSize={["15", "18"]}>
        Planes
        </Link>
        <Link href="#contact" fontSize={["15", "18"]} >
        Contact
        </Link>
        </HStack>
        <Spacer display={["none", "block"]} />
        <Button ml="5" onClick={toggleColorMode}>{colorMode === "light" ? <MdDarkMode /> : <BsFillSunFill />} </Button>
      </Flex>
    
  );
};
