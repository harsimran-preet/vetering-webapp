import React, { useState } from "react";

import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  initialRef,
  finalRef,
  Radio,
  Text,
  Link as ChakraLink,
  Select,
  NumberInput,
  NumberInputField,
  useToast,
  RadioGroup,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  VStack,
  InputRightElement,
  Button,
  Code,
  Stack,
  Wrap,
  Grid,
  Flex,
  WrapItem,
  Avatar,
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
} from "@chakra-ui/react";

import Link from "next/link";
import vetering from "../img/veteringlogo.png";
import {
  SunIcon,
  ArrowBackIcon,
  MoonIcon,
  EmailIcon,
  EditIcon,
  CloseIcon,
  CheckIcon,
  InfoIcon,
} from "@chakra-ui/icons";

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
        borderWidth={2}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Box marginRight="auto">
            <Wrap>
              <WrapItem>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </WrapItem>
            </Wrap>
          </Box>
          <Heading textAlign="center">HOME</Heading>
          <Box marginLeft="auto">
            <ThemeSelector />
          </Box>
        </Flex>
        <Flex
          minHeight="50vh"
          width="full"
          align="center"
          justifyContent="center"
        >
          <Box
            borderWidth={2}
            px={4}
            width="full"
            maxWidth="500px"
            height="400px"
            borderRadius={4}
            textAlign="center"
            boxShadow="lg"
          >
            <Flex h="100%" align="center" justify="center" direction="column">
              <Box mb={50}>
                <Heading>You have no requests right now!</Heading>
              </Box>
              <Text fontSize="20px">
                Select{" "}
                <Text as="b">
                  <EditIcon /> New Request{" "}
                </Text>
                in the lower right to see requests appear here
              </Text>
            </Flex>
          </Box>
        </Flex>

        <InitialFocus />
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

function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [selectedOption, setSelectedOption] = useState("");
  const [showInput, setShowInput] = useState(false);
  const options = [
    { label: "Landscape", value: "option1" },
    { label: "Food", value: "option2" },
    { label: "Transportation", value: "option3" },
    { label: "Dumpster Run", value: "option4" },
    { label: "Moving", value: "option5" },
    { label: "Other", value: "other" },
  ];
  return (
    <>
      <Stack
        direction="row"
        spacing={4}
        align="center"
        marginTop="30px"
        marginBottom="15px"
      >
        <Button
          leftIcon={<InfoIcon />}
          colorScheme="teal"
          variant="solid"
          width="full"
        >
          HELP
        </Button>
        <Button
          onClick={onOpen}
          leftIcon={<EditIcon />}
          colorScheme="teal"
          variant="solid"
          width="full"
        >
          NEW REQUEST
        </Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="4xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your request</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form>
                <FormControl my={4}>
                  <RadioBoxWithDateInput />
                </FormControl>

                <FormControl my={4}>
                  <FormLabel>City</FormLabel>
                  <Input placeholder="Location" />
                </FormControl>

                <FormControl my={4}>
                  <FormLabel>Type Of Service</FormLabel>
                  <Select
                    value={selectedOption}
                    onChange={(e) => {
                      setSelectedOption(e.target.value);
                      setShowInput(e.target.value === "other");
                    }}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                  {showInput && <Input placeholder="Specify the job here " />}
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
              </form>
            </ModalBody>

            <ModalFooter>
              <Button
                mr={10}
                leftIcon={<CloseIcon />}
                colorScheme="red"
                variant="solid"
                width="full"
                onClick={onClose}
              >
                CANCEL
              </Button>

              <Button
                leftIcon={<CheckIcon />}
                colorScheme="green"
                variant="solid"
                width="full"
                onClick={() =>
                  toast({
                    title: "Job created.",
                    description: "We've created your job for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })
                }
              >
                SUBMIT
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    </>
  );
}

function RadioBoxWithDateInput() {
  const [showDateInput, setShowDateInput] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Anytime");

  const handleRadioChange = (value: React.SetStateAction<string>) => {
    setSelectedOption(value);
    setShowDateInput(value === "Specific");
  };

  return (
    <FormControl my={4}>
      <FormLabel>Date of Job</FormLabel>
      <RadioGroup onChange={handleRadioChange} value={selectedOption}>
        <Stack direction="row">
          <Radio value="Specific">Specific</Radio>
          <Radio value="Anytime">Anytime</Radio>
        </Stack>
      </RadioGroup>
      {showDateInput && (
        <Box mt="4">
          <Input type="date" placeholder="Select a date" />
        </Box>
      )}
    </FormControl>
  );
}

export default Login;
