import { Heading, Box } from "@chakra-ui/react";

import { Data } from "../../type/data";
import ResultCard from "./ResultCard";
interface Props {
  data?: Data[] | null;
}

const Result = ({ data }: Props) => {
  return (
    <>
      <Box ml={"2.9rem"} padding={"1rem"}>
        <Heading size="md" mb={"1rem"}>
          Web Results
        </Heading>

        {data?.map((d) => (
          <ResultCard data={d} />
        ))}
      </Box>
    </>
  );
};

export default Result;
