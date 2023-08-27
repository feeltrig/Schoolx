import {Box, Button, Center, Input, Text, VStack} from "@chakra-ui/react";
import React, {useState} from "react";
import {getCsrfToken} from "next-auth/react";
import {signIn} from "next-auth/react";

const login = ({csrfToken}) => {
  const asd = () => {
    signIn("credentials", {
      username: "jsmith",
      password: "1234",
      callbackUrl: "/dashboard",
    });
  };
  return (
    <Box height={"100%"}>
      <Center minH={"100%"}>
        <VStack bg="white" p={"2rem"} borderRadius="2xl">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              asd();
            }}
          >
            <label>
              Username
              <input name="username" type="text" />
            </label>
            <label>
              Password
              <input name="password" type="password" />
            </label>
            <button type="submit">Sign in</button>
          </form>
        </VStack>
      </Center>
    </Box>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default login;
