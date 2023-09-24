import React from "react";
import {Stack, Button, Text, Flex} from "@chakra-ui/react";
import Link from "next/link";

const Students = () => {
  return (
    <div>
      <Text>Welcome to student managment</Text>
      <Stack my={"2rem"} maxW={"20rem"}>
        <Button>
          <Link href={"/addstudent"}>
            <Flex alignItems={"center"} gap={"1rem"}>
              <p>{"Add Student"}</p>
            </Flex>
          </Link>
        </Button>
        <Button>See all students</Button>
        <Button>Students performance analysis</Button>
      </Stack>
    </div>
  );
};

export default Students;
