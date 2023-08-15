import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const dashboard = () => {
  return (
    <Container maxW={"100%"}>
      <Text as={"b"} fontSize="4xl">
        Welcome to schoolx
      </Text>
      <VStack align={"start"}>
        <Box>
          <Heading>Upcoming Events</Heading>
          <VStack bg={"white"} w={"20rem"} borderRadius={"md"}>
            <div>
              <Image
                maxW={"100%"}
                objectFit="contain"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />
            </div>
            <Stack mt="6" spacing="3" px={"1rem"}>
              <Heading size="md">Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Divider />
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </Stack>
          </VStack>
        </Box>
        <Heading>Announcements</Heading>
      </VStack>
    </Container>
  );
};

export default dashboard;
