import {
  Box,
  Button,
  Center,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, {useState} from "react";
import {getCsrfToken} from "next-auth/react";
import {toggleObjectState} from "../../Funtions/dataFunctions";
import AxiosInstance from "../../service/axiosInstance";

const login = ({csrfToken}) => {
  const [creds, setcreds] = useState({
    username: "",
    password: "",
  });
  const toast = useToast();
  const authenticate = async () => {
    await AxiosInstance.post("/login", creds)
      .then(() => gotoPage(Router, "/dashboard"))
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

    // signIn("credentials", {
    //   username: "jsmith",
    //   password: "1234",
    //   callbackUrl: "/dashboard",
    // });
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
          <Button onClick={authenticate}>Login</Button>
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
