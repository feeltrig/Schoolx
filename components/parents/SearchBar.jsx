import {Icon, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {FaSearch, FaTimes} from "react-icons/fa";

export default function SearchBar(props) {
  const {value, setvalue, clearvalue, inputStyles, placeholder, disabled} =
    props;

  return (
    <InputGroup w={"lg"}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={setvalue}
        background={"white"}
        styles={inputStyles}
        disabled={disabled}
        shadow={"2xl"}
      />
      <InputRightElement>
        {value == "" ? (
          <Icon color={"black"} as={FaSearch} />
        ) : (
          <Icon color={"black"} as={FaTimes} onClick={clearvalue} />
        )}
      </InputRightElement>
    </InputGroup>
  );
}
