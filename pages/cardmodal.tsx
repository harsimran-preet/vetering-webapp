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
  RadioBoxWithDateInput,
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
  DeleteIcon,
  InfoIcon,
} from "@chakra-ui/icons";

const variant_color = "blue";

function CardModal() {
  return (
    <div>
      <ChakraProvider>
        <CSSReset />
        <CardModalArea />
      </ChakraProvider>
    </div>
  );
}

function CardModalArea() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  return (
    <div>
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
    </div>
  );
}

export default CardModal;
