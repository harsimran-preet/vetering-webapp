import { Box, ChakraProvider, Flex, Image, Text } from "@chakra-ui/react";

function Card() {
  return (
    <ChakraProvider>
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg="white"
      >
        <Image src="https://placekitten.com/400/300" alt="Card Image" />

        <Box p="4">
          <Text fontSize="xl" fontWeight="bold" mb="2">
            Card Title
          </Text>
          <Text fontSize="sm" color="gray.600">
            Card Description Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean ut lorem ac velit malesuada pretium.
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Flex
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bg="gray.100"
      >
        <Card />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
