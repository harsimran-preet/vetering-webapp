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
  InfoIcon,
  HamburgerIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { MdOutlineHome } from "react-icons/md";

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
                <BackButton />
              </WrapItem>
            </Wrap>
          </Box>
          <Heading textAlign="center">HELP</Heading>
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
              <Button
                leftIcon={<InfoOutlineIcon />}
                colorScheme="teal"
                justifyContent="flex-start"
                variant="outline"
                width="full"
                textStyle="leftButton"
              >
                Click here for Call Support
              </Button>
              <Button
                leftIcon={<InfoOutlineIcon />}
                colorScheme="teal"
                variant="outline"
                justifyContent="flex-start"
                width="full"
                textStyle="leftButton"
              >
                Click Here for Tutorial
              </Button>
              <Button
                leftIcon={<InfoOutlineIcon />}
                colorScheme="teal"
                justifyContent="flex-start"
                variant="outline"
                width="full"
                textStyle="leftButton"
              >
                Click Here for Questions and Answers
              </Button>
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
const Card = ({ imageUrl, heading, description }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      backgroundColor="#f2f2f2"
      borderRadius="10px"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      margin="15px"
      padding="10px"
      maxW="400px"
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      _hover={{
        backgroundColor: "#d4d4d4",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
      }}
      onClick={() => console.log("Card clicked!")}
    >
      <Box>
        <Text fontSize={20} as="b" size="lg" mb="2" color="#333">
          <InfoOutlineIcon /> &nbsp;&nbsp;
          {heading}
        </Text>
      </Box>
    </Box>
  );
};
export default Login;
