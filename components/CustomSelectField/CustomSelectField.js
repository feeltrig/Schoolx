import {Select} from "@chakra-ui/react";
import React from "react";

const CustomSelectField = (props) => {
  const {
    list,
    placeholder,
    onChange,
    customHandleChange,
    handleBlur,
    name,
    key,
  } = props;
  return (
    <Select
      key={key}
      bgGradient="linear(to-br, white, gray.100)"
      shadow={"md"}
      borderRadius={"md"}
      onBlur={handleBlur}
      color={"gray.500"}
      onChange={(e) => {
        onChange && onChange(e);
        customHandleChange !== undefined && customHandleChange(name)(e);
      }}
      // placeholder={placeholder}
    >
      <option selected hidden disabled value="">
        {placeholder}
      </option>
      {list &&
        list.map((listItem, listItemIndex) => (
          <option value={listItem.value}>{listItem.label}</option>
        ))}
    </Select>
  );
};

export default CustomSelectField;
