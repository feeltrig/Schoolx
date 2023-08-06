import {Container, Divider} from "@chakra-ui/react";
import CustomTable from "../components/CustomTable/CustomTable";
import SearchBar from "../components/parents/SearchBar";
import Router from "next/router";
import fakeDb from "../fakeDb/parents.json";
import {gotoPageWithData} from "../Funtions/routingFunctions";
import {
  clearSearchFilter,
  clearStringState,
  excludeStringFieldsArray,
} from "../Funtions/dataFunctions";
import {useEffect, useState} from "react";

export default function Parents() {
  // table headers
  const excludeHeader = ["id"];
  const headers = excludeStringFieldsArray(
    Object.keys(fakeDb[0]),
    excludeHeader
  );

  // parents state
  // search state
  const [parents, setparents] = useState(fakeDb);
  const [searchText, setSearchText] = useState("");

  // goto parents detail page
  const openParentsDetails = (data) => {
    gotoPageWithData(Router, "/parentsDetails", data);
  };

  // search parents on search text change
  useEffect(() => {
    if (searchText !== "") {
      searchParent(searchText, setparents, fakeDb);
    } else {
      clearSearchFilter(fakeDb, setparents);
    }
  }, [searchText]);

  // search parents
  const searchParent = (key, setstate, filterArray) => {
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
    <Container minW={"full"} m="0">
      <SearchBar
        value={searchText}
        setvalue={(e) => setSearchText(e.target.value)}
        clearvalue={() => clearStringState(setSearchText)}
        inputStyles={{boxShadow: "0 0 20px 2px rgba(0,0,0,0.1)"}}
        placeholder={"Search parents"}
      />
      <Divider />
      <CustomTable
        headers={headers}
        data={parents}
        onClick={openParentsDetails}
        textColor={"white"}
        noDataHeight={"20rem"}
        customTableStyles={{boxShadow: "0 0 20px 2px rgba(0,0,0,0.1)"}}
      />
    </Container>
  );
}
