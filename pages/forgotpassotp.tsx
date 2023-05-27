import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
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
  PinInputField,
  PinInput,
  HStack,
  InputLeftElement,
  Checkbox,
  Center,
} from "@chakra-ui/react";
import { SunIcon, PhoneIcon, ArrowBackIcon, MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";

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
        <Stack isInline justifyContent="space-between" mt={4}>
        <Link href="/forgotpass">
          <BackButton />
          </Link>
          <ThemeSelector />
        </Stack>
        <Box p={4}>
          <LoginHeader />
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
}
function BackButton() {
  return (
    <Box textAlign="left" py={4}>
      <IconButton aria-label="Back icon" icon={<ArrowBackIcon />} />
    </Box>
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
      <Heading>Forgot your Password?</Heading>
      <Text>Don't worry! Let us help you reset it.</Text>
    </Box>
  );
}

function LoginForm() {
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl my={4}>
          <Center>
            <HStack>
              <PinInput otp>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>

        <Link href="/forgotpassotp">
          <Button colorScheme="teal" width="full" mt={4}>
            Continue
          </Button>
        </Link>
      </form>
    </Box>
  );
}

export default Login;
