import {
  Input,
  InputGroup,
  InputLeftElement,
  HStack,

} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBox = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);




  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <HStack
          mx="32px"
          mb={"24px"}
          padding={"1rem"}
          borderRadius={"10px"}
          p={"16px"}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none" margin={".2em"}>
              <Search2Icon color="gray.700" />
            </InputLeftElement>
            <Input
              ref={ref}
              colorScheme="green"
              borderRadius={"50px"}
              border={"2px solid green"}
              placeholder="Type keyword "
              size="lg"
            />
          </InputGroup>

        </HStack>
      </form>
    </>
  );
};

export default SearchBox;
