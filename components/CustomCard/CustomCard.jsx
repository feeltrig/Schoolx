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
      w={"15rem"}
      borderRadius={"md"}
      overflow={"hidden"}
      shadow="md"
      _hover={{bg: "white", cursor: "pointer"}}
    >
      <Image maxW={"100%"} objectFit="contain" src={imageurl} alt="Chakra UI" />
      <Stack style={{marginBlock: "1rem"}} spacing="3" px={"1rem"}>
        <Heading size="md">{heading}</Heading>
        <Text noOfLines={3} fontSize="sm" color={"gray.600"}>
          {content}
        </Text>
        <Divider />
        <Button
          size={"sm"}
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
