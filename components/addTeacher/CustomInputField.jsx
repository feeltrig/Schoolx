import {Input, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {Field} from "formik";
import CustomFormError from "../CustomFormError/CustomFormError";

const CustomInputField = (props) => {
  const {
    title,
    name,
    placeholder,
    errors,
    touched,
    customField,
    customComponent,
    type,
  } = props;
  return (
    <VStack flex={1} minW={"20rem"}>
      <Text fontSize={"0.9rem"} as={"label"} htmlFor="firstName">
        {title}
      </Text>
      {!customField && (
        <Input
          as={Field}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          bgGradient="linear(to-br, white, gray.100)"
          shadow={"md"}
        />
      )}
      {customField && customComponent}
      <CustomFormError fieldName={name} errors={errors} touchFields={touched} />
    </VStack>
  );
};

export default CustomInputField;
