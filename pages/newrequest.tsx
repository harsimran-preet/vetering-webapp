import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  InputRightElement,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Code,
  Stack,
  Grid,
  Flex,
  theme,
  ColorModeProvider,
  useDisclosure,
  CSSReset,
  Heading,
  Textarea,
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

import {
  SunIcon,
  ArrowBackIcon,
  MoonIcon,
  CloseIcon,
  CheckIcon,
} from "@chakra-ui/icons";
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
      <Heading>NEW REQUEST</Heading>
      <Text>Create a new request for whatever help you need</Text>
    </Box>
  );
}

function SignupForm() {
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl my={4}>
          <FormLabel>Date of Job</FormLabel>
          <Input placeholder="Select Date and Time" size="md" type="date" />
        </FormControl>
        <FormControl my={4}>
          <FormLabel>City</FormLabel>
          <Input placeholder="Location" />
        </FormControl>

        <FormControl my={4}>
          <FormLabel>Type Of Service</FormLabel>
          <Select placeholder="Select Service Type">
            <option value="option1">Landscape</option>
            <option value="option1">Food</option>
            <option value="option1">Transportation</option>
            <option value="option2">Dumpster Run</option>
            <option value="option3">Moving</option>
            <option value="option1">Other</option>
          </Select>
        </FormControl>

        <FormControl my={4}>
          <FormLabel>Hours of Service</FormLabel>
          <NumberInput
            placeholder="in Hours"
            defaultValue={1}
            min={1}
            max={24}
            step={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl my={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Example: I need help trimming trees around my yard and mowing my front lawn. Then, I need help taking it off to the dump. I have a gas lawnmower and lopping shears for you to use, but you will need to bring a truck to haul off the waste. I'll help out with picking up tree trimmings and pay for the dump fees. I'm available any weekend in the mornings. Thanks!"
            size="lg"
            height="250px"
          />
        </FormControl>

        <Stack
          direction="row"
          spacing={4}
          align="center"
          marginTop="30px"
          marginBottom="15px"
        >
          <Button
            leftIcon={<CloseIcon />}
            colorScheme="red"
            variant="solid"
            width="full"
          >
            CANCEL
          </Button>

          <Button
            leftIcon={<CheckIcon />}
            colorScheme="green"
            variant="solid"
            width="full"
          >
            SUBMIT
          </Button>
        </Stack>
        
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
