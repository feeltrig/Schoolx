import {useToast} from "@chakra-ui/react";

const CustomToast = (props) => {
  const {message, containerStyle, position} = props;
  const toast = useToast({
    position: position ?? "top-right",
    title: message ?? "awdawdawd",
    containerStyle: containerStyle ?? {
      border: "20px solid red",
      height: "100vh",
    },
  });
  return toast;
};

export default CustomToast;
