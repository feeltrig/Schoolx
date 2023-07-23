import {
    Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch} from "react-icons/fa";


export default function SearchBar(props) {
  return (
    <InputGroup w={"lg"}>
      <Input placeholder="Search teachers" background={'white'} />
      <InputRightElement>
        <Icon color={"black"} as={FaSearch} />
      </InputRightElement>
    </InputGroup>
  );
}
