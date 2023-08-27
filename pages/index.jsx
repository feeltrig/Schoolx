import {Container} from "@chakra-ui/react";
import Head from "next/head";
import {useSession, signIn} from "next-auth/react";
import {useEffect} from "react";

export default function Items({mainState}) {
  const {status} = useSession();

  useEffect(() => {
    if (status !== "authenticated") {
      signIn();
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Container maxW={"100%"}></Container>
    </div>
  );
}
