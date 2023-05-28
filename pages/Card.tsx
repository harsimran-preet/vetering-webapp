import { Table, Tbody, Tr, Td,Image,Text, SimpleGrid, Box , ChakraProvider} from "@chakra-ui/react";

function ScrollableTable() {
  return (
    <ChakraProvider>
    <Box maxH="300px" overflowY="auto">
      <Table variant="simple" size="sm">
        <Tbody>
          <Tr>
            <Td>John</Td>
            <Td>Doe</Td>
            <Td>john@example.com</Td>
          </Tr>
          <Tr>
            <Td>Jane</Td>
            <Td>Doe</Td>
            <Td>jane@example.com</Td>
          </Tr>
          <Tr>
            <Td>Bob</Td>
            <Td>Smith</Td>
            <Td>bob@example.com</Td>
          </Tr>
          {/* Add more rows as needed */}
        </Tbody>
      </Table>
    </Box>
    </ChakraProvider>
  );
}

function ScrollableCardTable() {
  return (
    <ChakraProvider>
    <Box maxH="400px" overflowY="auto">
      <SimpleGrid columns={2} spacing={10}>
        <Box borderWidth="1px" borderRadius="lg" p="4">
          <Card
            imageUrl="https://bit.ly/dan-abramov"
            heading="Sam Smith"
            description="Heres a desription on the Job"
          />
          <Card
            imageUrl="https://bit.ly/dan-abramov"
            heading="Sam Smith"
            description="Heres a desription on the Job"
          />
          <Card
            imageUrl="https://bit.ly/dan-abramov"
            heading="Sam Smith"
            description="Heres a desription on the Job"
          />
          <Card
            imageUrl="https://bit.ly/dan-abramov"
            heading="Sam Smith"
            description="Heres a desription on the Job"
          />
          <Card
            imageUrl="https://bit.ly/dan-abramov"
            heading="Sam Smith"
            description="Heres a desription on the Job"
          />
        </Box>

        {/* Add more cards as needed */}
      </SimpleGrid>
    </Box>
    </ChakraProvider>
  );
}
const Card = ({ imageUrl, heading, description }) => {
  return (
    <ChakraProvider>
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
    </ChakraProvider>
  );
};

export default ScrollableCardTable;
