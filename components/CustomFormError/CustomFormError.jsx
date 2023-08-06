import {FormErrorMessage, Text} from "@chakra-ui/react";

const CustomFormError = ({errors, fieldName, touchFields}) => {
  return errors[fieldName] ? (
    <Text fontSize={"0.8rem"} color="red">
      {errors[fieldName]}
    </Text>
  ) : null;
};

export default CustomFormError;
