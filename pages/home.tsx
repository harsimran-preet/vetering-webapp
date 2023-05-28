import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link as ChakraLink,
  VStack,
  InputRightElement,
  Button,
  Code,
  Stack,
  Grid,
  Flex,
  Center,
  HStack,
  theme,
  ColorModeProvider,
  CSSReset,
  Image,
  Heading,
  InputLeftAddon,
  IconButton,
  useColorMode,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Checkbox,
  ChakraBaseProvider,
} from "@chakra-ui/react";
import { SunIcon, PhoneIcon, MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";
import vetering from "../img/veteringlogo.png";

const variant_color = "blue";

function Login() {
  return (
    <div>
      <ChakraProvider>
        <CSSReset />
        <LoginArea />
      </ChakraProvider>
    </div>
  );
}

function LoginArea() {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <ThemeSelector />
        <Box p={4}>
          <Flex justifyContent="center">
            <Image
              boxSize="50px"
              objectFit="cover"
              src="https://raw.githubusercontent.com/harsimran-preet/DxHub-Vetering/main/static/img/vetering--1--5%402x.png"
              alt="Vetering"
              my={4}
            />
          </Flex>
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
}

function ThemeSelector() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="right" py={4}>
      <IconButton
        aria-label="Sun icon"
        icon={<SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
}
function LoginHeader() {
  return (
    <Box textAlign="center">
      <Heading>Welcome to Vetering</Heading>
      <Text>Who are you?</Text>
    </Box>
  );
}

function LoginForm() {
  return (
    <Flex justifyContent="center" py={4}>
      <HStack spacing={8} direction="row">
        <Link href="https://myportal.calpoly.edu/">
          <Button colorScheme="teal" width="full" mt={4}>
            I am a Student
          </Button>
        </Link>
        <Link href="/login">
          <Button colorScheme="teal" width="full" mt={4}>
            I am a Veteran
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
}

export default Login;
