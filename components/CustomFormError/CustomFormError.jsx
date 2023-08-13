import {Text} from "@chakra-ui/react";

const CustomFormError = ({errors, fieldName, touchFields}) => {
  console.log(touchFields);
  return errors[fieldName] && touchFields[fieldName] ? (
    <Text fontSize={"0.8rem"} color="red">
      {errors[fieldName]}
    </Text>
  ) : null;
};

export default CustomFormError;
