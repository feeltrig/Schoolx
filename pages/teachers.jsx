import {Container, Divider} from "@chakra-ui/react";
import CustomTable from "../components/CustomTable/CustomTable";
import SearchBar from "../components/parents/SearchBar";
import Router from "next/router";
import fakeDb from "../fakeDb/students.json";
import {useEffect, useState} from "react";
import {clearSearchFilter, clearStringState} from "../Funtions/dataFunctions";
import {gotoPageWithData} from "../Funtions/routingFunctions";

export default function Teachers() {
  // table headers
  const headers = Object.keys(fakeDb[0]);

  // teacher state
  // search state
  const [teachers, setteachers] = useState(fakeDb);
  const [searchText, setSearchText] = useState("");

  // goto teachers detail page
  const openTeacherDetails = (data) => {
    // Router.push({
    //   pathname: "/teacherDetails",
    //   query: data,
    // });
    gotoPageWithData(Router, "/teacherDetails", data);
  };

  // search teachers on search text change
  useEffect(() => {
    if (searchText !== "") {
      searchTeacher(searchText, setteachers, fakeDb);
    } else {
      clearSearchFilter(fakeDb, setteachers);
    }
  }, [searchText]);

  // search teachers
  const searchTeacher = (key, setstate, filterArray) => {
    setstate(() =>
      filterArray.filter(
        (teacher) =>
          Object.values(teacher).filter((teacherItem) =>
            teacherItem.toString().toLowerCase().includes(key)
          ).length > 0
      )
    );
  };

  return (
    <Container p={"2rem"} minW={"full"} m="0" bg="gray.100" minH={"100vh"}>
      <SearchBar
        value={searchText}
        setvalue={(e) => setSearchText(e.target.value)}
        clearvalue={() => clearStringState(setSearchText)}
        inputStyles={{boxShadow: "0 0 20px 2px rgba(0,0,0,0.1)"}}
      />
      <Divider />
      <CustomTable
        headers={headers}
        data={teachers}
        onClick={openTeacherDetails}
        textColor={"white"}
        noDataHeight={"20rem"}
        customTableStyles={{boxShadow: "0 0 20px 2px rgba(0,0,0,0.1)"}}
      />
    </Container>
  );
}
