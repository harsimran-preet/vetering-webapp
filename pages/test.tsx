import { Select, Input, ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Other", value: "other" },
];

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showInput, setShowInput] = useState(false);

  return (
    <div>
      <ChakraProvider>
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
      {showInput && <Input placeholder="Enter other option" />}
      </ChakraProvider>
    </div>
    
  );
}

export default App;
