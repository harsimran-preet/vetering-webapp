import React from "react";
import { useState } from "react";
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
  Wrap,
  Grid,
  useDisclosure,
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
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
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
  InfoIcon,
  HamburgerIcon,
  InfoOutlineIcon,
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
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <BackButton />
              </WrapItem>
            </Wrap>
          </Box>
          <Heading textAlign="center">TUTORIALS</Heading>
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
            <Stack
              direction="column"
              spacing={4}
              align="center"
              marginTop="30px"
              marginBottom="15px"
            >
              <Flex width="full">
                <Button
                  leftIcon={<InfoOutlineIcon />}
                  colorScheme="teal"
                  justifyContent="flex-start"
                  variant="outline"
                  width="full"
                  textStyle="leftButton"
                >
                  How to create a new service request?{" "}
                </Button>
              </Flex>
              <Flex width="full">
                <Button
                  leftIcon={<InfoOutlineIcon />}
                  justifyContent="flex-start"
                  colorScheme="teal"
                  variant="outline"
                  width="full"
                  textStyle="leftButton"
                >
                  Question 2?
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Flex>

        <Stack
          direction="row"
          spacing={4}
          align="center"
          marginTop="30px"
          marginBottom="15px"
        >
          <Button
            leftIcon={<HamburgerIcon />}
            colorScheme="teal"
            variant="solid"
            width="full"
          >
            HOME
          </Button>

          <Button
            leftIcon={<EditIcon />}
            colorScheme="teal"
            variant="solid"
            width="full"
          >
            NEW REQUEST
          </Button>
        </Stack>
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
export default Login;
