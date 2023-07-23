import {Container} from "@chakra-ui/react";
import {withRouter} from "next/router";
import CustomTable from "../components/CustomTable/CustomTable";
import {objectToArray} from "../Funtions/dataFunctions";

export function TeacherDetails(props) {
  const teacherData = props.router.query;

  const headers = ["Param", "Info"];
  const customData = objectToArray(teacherData);

  return (
    <Container p={"2rem"} minW={"full"} m="0" bg="gray.100" minH={"100vh"}>
      hello
      <CustomTable headers={headers} customData={customData} />
    </Container>
  );
}

export default withRouter(TeacherDetails);
