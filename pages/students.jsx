import React from "react";
import {Stack, Button, Text} from "@chakra-ui/react";

const Students = () => {
  return (
    <div>
      <Text>Welcome to student managment</Text>
      <Stack my={"2rem"} maxW={"20rem"}>
        <Button>Add Student</Button>
        <Button>See all students</Button>
        <Button>Students performance analysis</Button>
      </Stack>
    </div>
  );
};

export default Students;
