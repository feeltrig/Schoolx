import {Select} from "@chakra-ui/react";
import React from "react";

const CustomSelectField = (props) => {
  const {list, placeholder, onChange} = props;
  return (
    <Select
      onChange={(e) => {
        onChange && onChange(e);
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
