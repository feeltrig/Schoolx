import {Box, Button, Center, Input, Text, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {toggleObjectState} from "../../Funtions/dataFunctions";
import AxiosInstance from "../../service/axiosInstance";
import Router from "next/router";
import {gotoPage} from "../../Funtions/routingFunctions";
import {useToast} from "@chakra-ui/react";

const SignIn = () => {
  const [creds, setcreds] = useState({
    username: "",
    password: "",
  });
  const toast = useToast();
  const authenticate = async () => {
    await AxiosInstance.post("/register", creds)
      .then(() => gotoPage(Router, "/authpages/login"))
      .catch((err) =>
        toast({
          position: "top-right",
          title: "invalid creds",

          containerStyle: {
            height: "100vh",
            padding: "2rem",
            margin: 0,
          },
        })
      );
  };

  return (
    <Box height={"100%"}>
      <Center minH={"100%"}>
        <VStack bg="white" p={"2rem"} borderRadius="2xl">
          <Text>Username</Text>
          <Input
            onChange={(e) =>
              toggleObjectState(setcreds, "username", e.target.value)
            }
          />
          <Text>Password</Text>
          <Input
            onChange={(e) =>
              toggleObjectState(setcreds, "password", e.target.value)
            }
          />
          <Button onClick={authenticate}>Register</Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default SignIn;
