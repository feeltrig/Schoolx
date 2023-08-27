import {
  Button,
  Divider,
  Heading,
  Stack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";

const CustomCard = (props) => {
  const {imageurl, heading, content, onClick} = props;
  return (
    <VStack
      bg={"gray.200"}
      w={"20rem"}
      borderRadius={"2xl"}
      overflow={"hidden"}
      _hover={{bg: "white", cursor: "pointer", shadow: "2xl"}}
    >
      <Image maxW={"100%"} objectFit="contain" src={imageurl} alt="Chakra UI" />
      <Stack style={{marginBlock: "1rem"}} spacing="3" px={"1rem"}>
        <Heading size="md">{heading}</Heading>
        <Text noOfLines={3} color={"gray.600"}>
          {content}
        </Text>
        <Divider />
        <Button
          variant="ghost"
          colorScheme="blue"
          onClick={(e) => onClick && onClick(e, props)}
        >
          See more
        </Button>
      </Stack>
    </VStack>
  );
};

export default CustomCard;
