import React from "react";
import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";

// const CustomCard = () => {
//   return <div>CustomCard</div>;
// };

export const CustomCardUI = (props) => {
  const {imageSrc, heading, bodyContent} = props;
  return (
    <Box>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
    </Box>
  );
};
