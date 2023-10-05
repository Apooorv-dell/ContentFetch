import "./App.css";
import { Box } from "@chakra-ui/react";
import SearchBox from "./Components/IProject/SearchBox";
import Result from "./Components/IProject/Result";
import useData from "./services/api_service";
import { useState } from "react";

function App() {
  const [input, setInput] = useState<String>("");

  const { data, error } = useData(input, input);

  console.log(error);

  return (
    <>
      <Box>
        <SearchBox onSearch={(input) => setInput(input)} />
      </Box>

     

      <Result data={data?.data}  />
    </>
  );
}

export default App;
