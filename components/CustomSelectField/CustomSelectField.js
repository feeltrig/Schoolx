import {Select} from "@chakra-ui/react";
import React from "react";

const CustomSelectField = (props) => {
  const {list, placeholder, onChange, customHandleChange, name} = props;
  return (
    <Select
      onChange={(e) => {
        onChange && onChange(e);
        customHandleChange !== undefined && customHandleChange(name)(e);
      }}
      placeholder={placeholder}
    >
      {list &&
        list.map((listItem, listItemIndex) => (
          <option value={listItem.value}>{listItem.label}</option>
        ))}
    </Select>
  );
};

export default CustomSelectField;
