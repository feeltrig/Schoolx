import {Center, Text} from "@chakra-ui/react";

const CustomNoData = (props) => {
  const {nodataMessage, textColor, customNoDataStyles} = props;

  return (
    <Center style={customNoDataStyles}>
      <Text color={textColor}>{nodataMessage}</Text>
    </Center>
  );
};

export default CustomNoData;
