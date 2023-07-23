import {Container} from "@chakra-ui/react";
import {withRouter} from "next/router";

export function TeacherDetails(props) {
  const teacherData = props.router.query;
  console.log(teacherData);

  return (
    <Container p={"2rem"} minW={"full"} m="0" bg="gray.100" minH={"100vh"}>
      hello
    </Container>
  );
}

export default withRouter(TeacherDetails);
