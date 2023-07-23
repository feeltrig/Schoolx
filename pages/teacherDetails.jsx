import {
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Square,
  Text,
} from "@chakra-ui/react";
import {withRouter} from "next/router";
import CustomTable from "../components/CustomTable/CustomTable";
import {objectToArray} from "../Funtions/dataFunctions";

export function TeacherDetails(props) {
  const teacherData = props.router.query;

  const headers = ["Param", "Info"];
  const customData = objectToArray(teacherData);

  return (
    <Container p={"2rem"} minW={"full"} m="0" bg="gray.100" minH={"100vh"}>
      <Flex px={"2rem"} color="black" gap={"5rem"}>
        <Center w="100px">
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />
        </Center>
        <Center w="100px" gap={"10px"}>
          <Text>{teacherData.first_name}</Text>
          <Text>{teacherData.last_name}</Text>
        </Center>
      </Flex>

      <CustomTable headers={headers} customData={customData} />
    </Container>
  );
}

export default withRouter(TeacherDetails);
