import React from "react";
import {
  ChakraProvider,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Text,
  Link as ChakraLink,
  VStack,
  InputRightElement,
  useDisclosure,
  useToast,
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
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

import Link from "next/link";
import vetering from "../img/veteringlogo.png";
import {
  SunIcon,
  ArrowBackIcon,
  MoonIcon,
  EmailIcon,
  EditIcon,
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
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
            overflowY="auto"
          >
            <Card
              imageUrl="https://bit.ly/dan-abramov"
              heading="Sam Smith"
              description="Heres a desription on the Job"
            />
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
            leftIcon={<InfoIcon />}
            colorScheme="teal"
            variant="solid"
            width="full"
          >
            HELP
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

interface Cardprops {
  imageUrl: string;
  heading: string;
  description: string;
}
const Card: React.FC<Cardprops> = ({ imageUrl, heading, description }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  return (
    <ChakraProvider>
      <Box
        onClick={onOpen}
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
      >
        <Image
          src={imageUrl}
          alt="Image description"
          borderRadius="5px"
          marginRight="20px"
          flex="0 0 auto"
          maxH="50px"
          maxW="50px"
        />
        <Box flex="1 1 auto">
          <Text fontSize={20} as="b" size="lg" mb="2" color="#333">
            {heading}
          </Text>
          <Text fontSize="md" color="#666" lineHeight="1.5" mt="0">
            {description}
          </Text>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your request info</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <FormControl my={4}>
                <FormLabel>City</FormLabel>
                <Input readOnly defaultValue="Location" />
              </FormControl>

              <FormControl my={4}>
                <FormLabel>Type Of Service</FormLabel>
                <Input readOnly defaultValue="Service" />
              </FormControl>

              <FormControl my={4}>
                <FormLabel>Hours of Service</FormLabel>
                <Input readOnly defaultValue="6" />
              </FormControl>
              <FormControl my={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  defaultValue="I need help trimming trees around my yard and mowing my front lawn. Then, I need help taking it off to the dump. I have a gas lawnmower and lopping shears for you to use, but you will need to bring a truck to haul off the waste. I'll help out with picking up tree trimmings and pay for the dump fees. I'm available any weekend in the mornings. Thanks!"
                  size="lg"
                  readOnly
                  height="250px"
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={10}
              leftIcon={<DeleteIcon />}
              colorScheme="red"
              variant="solid"
              width="full"
              onClick={() =>
                toast({
                  title: "Job Deleted.",
                  description: "This job has been deleted sucessfully",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              DELETE
            </Button>

            <Button
              leftIcon={<CheckIcon />}
              colorScheme="green"
              variant="solid"
              width="full"
              onClick={onClose}
            >
              OKAY
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};
export default Login;
