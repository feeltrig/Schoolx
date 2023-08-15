import {Box, Container, Heading, Text, VStack} from "@chakra-ui/react";
import {Card, CardBody} from "@chakra-ui/react";
import React from "react";

const dashboard = () => {
  return (
    <Container maxW={"100%"}>
      <>
        <Card>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
        </Card>
      </>
      <Text as={"b"} fontSize="4xl">
        Welcome to schoolx
      </Text>
      <VStack align={"start"}>
        <Box>
          <Heading>Upcoming Events</Heading>
        </Box>
        <Heading>Announcements</Heading>
      </VStack>
    </Container>
  );
};

export default dashboard;
