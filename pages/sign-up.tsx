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
  useDisclosure,
  CSSReset,
  Heading,
  InputLeftAddon,
  Radio,
  RadioGroup,
  IconButton,
  useColorMode,
  FormControl,
  Input,
  FormLabel,
  Select,
  InputGroup,
  InputLeftElement,
  Checkbox,
} from "@chakra-ui/react";
import { Link as Link1 } from "@chakra-ui/react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

import { SunIcon, ArrowBackIcon, MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";

const variant_color = "blue";

function Signup() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <SignupArea />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

function SignupArea() {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        my={10}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Stack isInline justifyContent="space-between" mt={4}>
          <Link href="/login">
            <BackButton />
          </Link>
          <ThemeSelector />
        </Stack>
        <Box p={4}>
          <SignupHeader />
          <SignupForm />
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
function SignupHeader() {
  return (
    <Box textAlign="center">
      <Heading>Create an Account</Heading>
      <Text>To start using Vetering</Text>
    </Box>
  );
}

function SignupForm() {
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl my={4}>
          <FormLabel>Full Name</FormLabel>
          <Input placeholder="Full name" />
        </FormControl>
        <FormControl my={4}>
          <FormLabel>Phone Number</FormLabel>
          <InputGroup>
            <InputLeftAddon children="+1" />
            <Input type="tel" placeholder="Phone number" maxLength={10} />
          </InputGroup>
        </FormControl>
        <FormControl my={4}>
          <FormLabel>Gender</FormLabel>
          <Select placeholder="Select option">
            <option value="option1">Male</option>
            <option value="option2">Female</option>
            <option value="option3">other</option>
          </Select>
        </FormControl>
        <FormControl my={4}>
          <RadioGroup defaultValue="no">
            <Stack spacing={6} direction="row">
              {/* <FormLabel>Are you a Veteran?</FormLabel> */}
              <Text as="b">Are you a Veteran?</Text>
              <Radio colorScheme="teal" value="yes">
                Yes
              </Radio>
              <Radio colorScheme="teal" value="no">
                No
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl my={4}>
          <FormLabel>Date of Birth</FormLabel>
          <Input placeholder="Select Date and Time" size="md" type="date" />
        </FormControl>
        <FormControl my={4}>
          <FormLabel>
            Social Security Number (SSN)
            <AlertDialogExample />
          </FormLabel>

          <SSNInput />
        </FormControl>
        <FormControl my={4}>
          <FormLabel>Password</FormLabel>
          <PasswordInput />
        </FormControl>
        <FormControl my={4}>
          <FormLabel>Confirm Password</FormLabel>
          <PasswordInput />
        </FormControl>
        <Link href="/successfullsignup">
          <Button colorScheme="teal" width="full" mt={4}>
            Create an Account "Successfull"
          </Button>
        </Link>
        <Link href="/notavet">
          <Button colorScheme="teal" width="full" mt={4}>
            Create an Account "Unsuccessfull"
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
function SSNInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        maxLength={9}
        placeholder="Enter SSN"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

function AlertDialogExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Link1 color="teal.500" onClick={onOpen}>
        &nbsp;Why?
      </Link1>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Why we ask for SSN?
            </AlertDialogHeader>

            <AlertDialogBody>
              Your Social Security Number is not stored on our app and is solely
              processed by the Veterans Affairs (USVA) to protect against stolen
              valor. We want to return service to those who deserve it, and the
              VA requires this information to confirm your Veteran status.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="teal" onClick={onClose} ml={3}>
                Okay
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
export default Signup;
