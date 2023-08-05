import {Icon, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {FaCross, FaSearch} from "react-icons/fa";

export default function SearchBar(props) {
  const {value, setvalue, clearvalue, inputStyles} = props;

  return (
    <InputGroup w={"lg"}>
      <Input
        placeholder="Search teachers"
        value={value}
        onChange={setvalue}
        background={"white"}
        styles={inputStyles}
      />
      <InputRightElement>
        {value == "" ? (
          <Icon color={"black"} as={FaSearch} />
        ) : (
          <Icon color={"black"} as={FaCross} onClick={clearvalue} />
        )}
      </InputRightElement>
    </InputGroup>
  );
}
