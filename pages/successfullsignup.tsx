import React from "react";
import { useRouter } from "next/router";
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
} from "@chakra-ui/react";
import { SunIcon, PhoneIcon, MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";
import vetering from "../img/veteringlogo.png";
import { useCallback, useEffect, useRef } from "react";

import ReactCanvasConfetti from "react-canvas-confetti";



const variant_color = "blue";

function Login() {
    // const refAnimationInstance = useRef(null);

    // const getInstance = useCallback((instance: null) => {
    //   refAnimationInstance.current = instance;
    // }, []);

    // const makeShot = useCallback((particleRatio: number, opts: any) => {
    //   refAnimationInstance.current &&
    //     refAnimationInstance.current({
    //       ...opts,
    //       origin: { y: 0.7 },
    //       particleCount: Math.floor(200 * particleRatio),
    //     });
    // }, []);

    // useEffect(() => fire(), []);

    // const fire = useCallback(() => {
    //   makeShot(0.25, {
    //     spread: 26,
    //     startVelocity: 55,
    //   });

    //   makeShot(0.2, {
    //     spread: 60,
    //   });

    //   makeShot(0.35, {
    //     spread: 100,
    //     decay: 0.91,
    //     scalar: 0.8,
    //   });

    //   makeShot(0.1, {
    //     spread: 120,
    //     startVelocity: 25,
    //     decay: 0.92,
    //     scalar: 1.2,
    //   });

    //   makeShot(0.1, {
    //     spread: 120,
    //     startVelocity: 45,
    //   });
    // }, [makeShot]);


  return (
    <div>
      <ChakraProvider>
      {/* <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      /> */}
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
      <Heading>Created Account Sucessfully!</Heading>
      <Text my={10}>
        Click on Home button below to access the App's dashboard
      </Text>
    </Box>
  );
}

function LoginForm() {
  const router = useRouter();
  return (
    <Box>
      <Link href="/dashboard">
        <Button colorScheme="teal" width="full" mt={4}>
          Home
        </Button>
      </Link>
    </Box>
  );
}



export default Login;
