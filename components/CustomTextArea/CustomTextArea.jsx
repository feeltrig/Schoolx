import {Textarea} from "@chakra-ui/react";
import React from "react";

const CustomTextArea = (props) => {
  const {placeholder, size, id, name, handleBlur, customHandleChange} = props;
  return (
    <Textarea
      shadow={"md"}
      borderRadius={"md"}
      placeholder={placeholder}
      size={size}
      onBlur={handleBlur}
      id={id}
      resize={"none"}
      name={name}
      onChange={(e) => {
        customHandleChange !== undefined && customHandleChange(name)(e);
      }}
    />
  );
};

export default CustomTextArea;
