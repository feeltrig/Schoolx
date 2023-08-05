import {Center, Text} from "@chakra-ui/react";

const CustomNoData = (props) => {
  const {
    nodataMessage,
    height,
    width,
    backgroundColor,
    textColor,
    customContainerStyle,
  } = props;

  return (
    <Center
      style={customContainerStyle}
      h={height}
      w={width}
      bg={backgroundColor}
    >
      <Text color={textColor}>{nodataMessage}</Text>
    </Center>
  );
};

export default CustomNoData;
