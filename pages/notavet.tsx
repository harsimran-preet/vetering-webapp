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
      <Text my={10}>
        We are having trouble verifying your background.<br/> Please try again or
        contact the veterans office for help.
      </Text>
   
    </Box>
  );
}

function LoginForm() {
    const router = useRouter();
  return (
    <Box>
      <Link href="/sign-up">
        <Button
          colorScheme="teal"
          width="full"
          mt={4}
          type="button"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </Link>
      <Link href="https://www.google.com/search?q=veterans%20office%20san%20luis%20obispo&oq=veterans+offi&aqs=chrome.1.69i57j35i39j0i457i512j0i402i512j46i175i199i402i512j0i512l2j46i175i199i512j46i512j0i512.3483j0j1&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AJOqlzWHPYz8FMcLQ5BSTUni98oAht-LQQ:1679182427300&rflfq=1&num=10&rldimm=8336454779978937387&lqi=Ch92ZXRlcmFucyBvZmZpY2Ugc2FuIGx1aXMgb2Jpc3BvSJifwbCHq4CACFovEAAQARgAGAEYAhgDGAQiH3ZldGVyYW5zIG9mZmljZSBzYW4gbHVpcyBvYmlzcG-SAQ92ZXRlcmFuc19jZW50ZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUnRlWE5FWkdWM0VBRaoBNxABKhMiD3ZldGVyYW5zIG9mZmljZSgAMh4QASIajss3huuZ4X3m3yWj7qe6zmPNu_TD8tbjWsPgAQA&ved=2ahUKEwjQk96A0ub9AhVgI0QIHW9iBWIQvS56BAgTEAE&sa=X&rlst=f#rlfi=hd:;si:8336454779978937387,l,Ch92ZXRlcmFucyBvZmZpY2Ugc2FuIGx1aXMgb2Jpc3BvSJifwbCHq4CACFovEAAQARgAGAEYAhgDGAQiH3ZldGVyYW5zIG9mZmljZSBzYW4gbHVpcyBvYmlzcG-SAQ92ZXRlcmFuc19jZW50ZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUnRlWE5FWkdWM0VBRaoBNxABKhMiD3ZldGVyYW5zIG9mZmljZSgAMh4QASIajss3huuZ4X3m3yWj7qe6zmPNu_TD8tbjWsPgAQA;mv:[[35.2902254,-120.64011419999999],[35.2648279,-120.6683249]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2">
        <Button colorScheme="teal" width="full" mt={4}>
          Veteran's Office Info
        </Button>
      </Link>
    </Box>
  );
}

export default Login;
