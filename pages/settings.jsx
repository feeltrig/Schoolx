import React from "react";
import {
  Stack,
  Heading,
  Switch,
  FormControl,
  FormLabel,
  SimpleGrid,
} from "@chakra-ui/react";

const Settings = () => {
  return (
    <div>
      <Heading>Settings</Heading>
      <Stack my={"2rem"} maxW={"20rem"}>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            Enable email alerts?
          </FormLabel>
          <Switch id="email-alerts" />
        </FormControl>
      </Stack>
    </div>
  );
};

export default Settings;
