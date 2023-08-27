import {Box, Button, Center, Input, Text, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {useSession, signIn, signOut} from "next-auth/react";
import {toggleObjectState} from "../../Funtions/dataFunctions";

const login = () => {
  const {data: session, status} = useSession();
  const [loginCreds, setloginCreds] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    signIn(undefined, {callbackUrl: "http://localhost:3000/bar"});
  };

  return (
    <Box height={"100%"}>
      {status !== "authenticated" ? (
        <Center minH={"100%"}>
          <VStack bg="white" p={"2rem"} borderRadius="2xl">
            <Text>Login</Text>
            <Input
              onChange={(e) =>
                toggleObjectState(setloginCreds, "username", e.target.value)
              }
            />
            <Input
              onChange={(e) =>
                toggleObjectState(setloginCreds, "password", e.target.value)
              }
            />
            <Button onClick={handleLogin}>Login</Button>
          </VStack>
        </Center>
      ) : (
        <Center>
          <Text>You are logged in</Text>
          <Button
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </Button>
        </Center>
      )}
    </Box>
  );
};

export default login;
