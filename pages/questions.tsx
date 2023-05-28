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
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  const [isOpenModal4, setIsOpenModal4] = useState(false);

  const handleOpenModal1 = () => setIsOpenModal1(true);
  const handleCloseModal1 = () => setIsOpenModal1(false);

  const handleOpenModal2 = () => setIsOpenModal2(true);
  const handleCloseModal2 = () => setIsOpenModal2(false);

  const handleOpenModal3 = () => setIsOpenModal3(true);
  const handleCloseModal3 = () => setIsOpenModal3(false);

  const handleOpenModal4 = () => setIsOpenModal4(true);
  const handleCloseModal4 = () => setIsOpenModal4(false);

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
          <Heading textAlign="center">QUESTIONS</Heading>
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
                  onClick={handleOpenModal1}
                  colorScheme="teal"
                  justifyContent="flex-start"
                  variant="outline"
                  width="full"
                  textStyle="leftButton"
                >
                  What kind of jobs can I request help for?
                </Button>
                <Modal isOpen={isOpenModal1} onClose={handleCloseModal1}>
                  <ModalOverlay
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  />
                  <ModalContent>
                    <ModalHeader>
                      What kind of jobs can I request help for?
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      Our users request a variety of jobs. Some popular requests
                      are: moving help, yard work, hauling waste to the dump,
                      driving services, dog walking, and food delivery. If you
                      jobs doesn’t fit one of these categories, select “other”
                      when creating a new request i.If it’s an odd job, feel
                      free to post it and see if a volunteer picks it up!
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={handleCloseModal1}>Close</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Flex>
              <Flex width="full">
                <Button
                  leftIcon={<InfoOutlineIcon />}
                  justifyContent="flex-start"
                  onClick={handleOpenModal2}
                  colorScheme="teal"
                  variant="outline"
                  width="full"
                  textStyle="leftButton"
                >
                  Who are the volunteers?
                </Button>
                <Modal isOpen={isOpenModal2} onClose={handleCloseModal2}>
                  <ModalOverlay
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  />
                  <ModalContent>
                    <ModalHeader> Who are the volunteers?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      The volunteers are students from Cal Poly. Many students
                      come from a variety of different groups on campus: Center
                      for Military-Connected Students, Honors Societies, Clubs,
                      Greek Life, and more.
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={handleCloseModal2}>Close</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Flex>
              <Flex width="full">
                <Button
                  leftIcon={<InfoOutlineIcon />}
                  justifyContent="flex-start"
                  onClick={handleOpenModal3}
                  colorScheme="teal"
                  variant="outline"
                  width="full"
                  textStyle="leftButton"
                >
                  How many requests can I make?
                </Button>
                <Modal isOpen={isOpenModal3} onClose={handleCloseModal3}>
                  <ModalOverlay
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  />
                  <ModalContent>
                    <ModalHeader>How many requests can I make?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      There is no limit on the number of requests you make. With
                      that in mind, try not to spam requests as this will make
                      it harder for others to find volunteers.
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={handleCloseModal3}>Close</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Flex>
              <Flex width="full">
                <Button
                  onClick={handleOpenModal4}
                  leftIcon={<InfoOutlineIcon />}
                  justifyContent="flex-start"
                  colorScheme="teal"
                  variant="outline"
                  width="full"
                  textStyle="leftButton"
                >
                  Does this cost me any money?
                </Button>
                <Modal isOpen={isOpenModal4} onClose={handleCloseModal4}>
                  <ModalOverlay
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  />
                  <ModalContent>
                    <ModalHeader> Does this cost me any money?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      No! Vetering is a completely free platform and requires no
                      payment for signup, posts, or jobs. If you wanted to give
                      volunteers a tip or hire them on the side in the future,
                      that’s fine too!
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={handleCloseModal4}>Close</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
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
