import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa";

const ItemCard = ({ text }) => {
  return (
    <HStack align={"center"} shadow={"base"} bg="white" p={"0.5rem"}>
      <Box>
        <Text>{text}</Text>
      </Box>
      <Icon as={FaPlus} />
    </HStack>
  );
};

export default ItemCard;
