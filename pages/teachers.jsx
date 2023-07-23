import {Container, Divider} from "@chakra-ui/react";
import CustomTable from "../components/CustomTable/CustomTable";
import SearchBar from "../components/parents/SearchBar";
import Router from "next/router";
import fakeDb from "../fakeDb/fakeDb.json";

export default function Teachers() {
  // table headers
  const headers = [
    "First Name",
    "Last Name",
    "Gender",
    "Address",
    "Phone",
    "Email",
  ];

  // goto teachers detail page
  const openTeacherDetails = (data) => {
    Router.push({
      pathname: "/teacherDetails",
      query: data,
    });
  };

  return (
    <Container p={"2rem"} minW={"full"} m="0" bg="gray.100" minH={"100vh"}>
      <SearchBar />
      <Divider />
      <CustomTable
        headers={headers}
        data={fakeDb}
        onClick={openTeacherDetails}
      />
    </Container>
  );
}
