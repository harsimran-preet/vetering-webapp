
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
  theme,
  ColorModeProvider,
  CSSReset,
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
} from "@chakra-ui/react";
import { SunIcon, PhoneIcon, MoonIcon } from "@chakra-ui/icons";
import Link from 'next/link';

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
      <Heading>Sign In to Your Account</Heading>
      <Text>Welcome to Vetering</Text>
    </Box>
  );
}

function LoginForm() {
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl>
          <FormLabel>Phone Number</FormLabel>
          <InputGroup>
            <InputLeftAddon children="+1" />
            <Input type="tel" placeholder="Phone number" maxLength={10} />
          </InputGroup>
        </FormControl>
        <FormControl my={4}>
          <FormLabel>Password</FormLabel>
          <PasswordInput />
        </FormControl>
        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
          <Box>
            <ChakraLink href="/forgotpass">Forgot your Password?</ChakraLink>
          </Box>
        </Stack>
        <Link href="/dashboard">
          <Button colorScheme="teal" width="full" mt={4}>
            Sign In
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button colorScheme="teal" width="full" mt={4}>
            Create an Account
          </Button>
        </Link>
      </form>
    </Box>
  );
}
function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default Login;
