import {HStack, Icon} from "@chakra-ui/react";
import React from "react";
import {FaUserCircle} from "react-icons/fa";

const Headerbar = () => {
  return (
    <HStack
      position={"absolute"}
      w={"calc(100vw - 15rem)"}
      h={"4rem"}
      right={0}
      shadow="md"
      p={"2rem"}
      backdropFilter="auto"
      backdropBlur="8px"
    >
      <Icon as={FaUserCircle} />
    </HStack>
  );
};

export default Headerbar;
