import {Container} from "@chakra-ui/react";
import CustomTable from "../../components/CustomTable/CustomTable";
import SearchBar from "../../components/parents/SearchBar";
import Router from "next/router";
import fakeDb from "../../fakeDb/students.json";
import {useEffect, useState} from "react";
import {
  initializeState,
  clearStringState,
  excludeStringFieldsArray,
  toggleObjectState,
  setFieldValueAllArray,
  setSingleItemInArrayByField,
  addIsCheckedFieldArray,
  getAllItemsWithConditionArray,
} from "../../Funtions/dataFunctions";
import {gotoPageWithData} from "../../Funtions/routingFunctions";
import CustomModal from "../../components/CustomModal/CustomModal";
import {stringsConstants} from "../../Utils/stringsConstants";

export default function Teachers() {
  // table headers
  // delete modal buttons
  const excludeHeader = ["id"];
  const headers = excludeStringFieldsArray(
    Object.keys(fakeDb[0]),
    excludeHeader
  );

  // teacher state
  // search state
  // editing state
  const [teachers, setteachers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [teacherState, setteacherState] = useState({
    teachers: [],
    searchText: "",
    isLoading: false,
    isEditing: false,
    deleteModalOpen: false,
    tempTeacherData: {},
  });

  // handle editing toggle
  const handleTabToggle = (e) => {
    e === 1
      ? toggleObjectState(setteacherState, "isEditing", true)
      : toggleObjectState(setteacherState, "isEditing", false);
  };

  // handle single checkbox change
  const singleCheckboxOnChange = (data, e) => {
    setSingleItemInArrayByField(
      setteachers,
      "isChecked",
      e.target.checked,
      "id",
      data.id
    );
  };

  console.log(teacherState);

  // select all teachers
  const checkAllFields = (e) => {
    setFieldValueAllArray(setteachers, "isChecked", e.target.checked);
  };

  // delete selected teachers
  const handleDeleteSelected = () => {
    toggleObjectState(
      setteacherState,
      "deleteModalOpen",
      !teacherState.deleteModalOpen
    );
    // setteachers((prev) =>
    //   getAllItemsWithConditionArray(prev, "isChecked", false)
    // );
  };

  // delete on confirm records
  const handleDeleteRecords = () => {
    setteachers((prev) =>
      getAllItemsWithConditionArray(prev, "isChecked", false)
    );
    toggleObjectState(
      setteacherState,
      "deleteModalOpen",
      !teacherState.deleteModalOpen
    );
  };

  const toggleDeleteModal = () => {
    toggleObjectState(
      setteacherState,
      "deleteModalOpen",
      !teacherState.deleteModalOpen
    );
  };

  // get teachers from api
  useEffect(() => {
    setteacherState((obj) => ({...obj, isLoading: true}));
    setTimeout(() => {
      setteachers(addIsCheckedFieldArray(fakeDb));
      setteacherState((obj) => ({...obj, isLoading: false}));
    }, 2000);
  }, []);

  // goto teachers detail page
  const openTeacherDetails = (data) => {
    gotoPageWithData(Router, "/teacherDetails", data);
  };

  // search teachers on search text change
  useEffect(() => {
    if (!teacherState.isLoading) {
      if (searchText !== "") {
        searchTeacher(searchText, setteachers, addIsCheckedFieldArray(fakeDb));
      } else {
        initializeState(addIsCheckedFieldArray(fakeDb), setteachers);
      }
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

  // SECOND INITIALIZATIONS
  const deleteModalButtons = [
    {
      title: "Delete",
      onClick: handleDeleteRecords,
    },
    {
      title: "Cancel",
      onClick: handleDeleteSelected,
    },
  ];

  return (
    <Container minW={"100%"} m="0" p="0">
      <SearchBar
        value={searchText}
        setvalue={(e) => setSearchText(e.target.value)}
        clearvalue={() => clearStringState(setSearchText)}
        inputStyles={{boxShadow: "0 0 20px 2px rgba(0,0,0,0.1)"}}
        placeholder={"Search teachers"}
        disabled={teacherState.isLoading}
      />
      <CustomTable
        headers={headers}
        data={teachers}
        onClick={openTeacherDetails}
        textColor={"white"}
        noDataHeight={"20rem"}
        customTableStyles={{boxShadow: "0 0 20px 2px rgba(0,0,0,0.1)"}}
        isLoading={teacherState.isLoading}
        isEditing={teacherState.isEditing}
        handleTabToggle={handleTabToggle}
        checkboxOnChange={singleCheckboxOnChange}
        checkAllFields={checkAllFields}
        handleDeleteSelected={handleDeleteSelected}
      />
      <CustomModal
        title={"Delete"}
        isOpen={teacherState.deleteModalOpen}
        handleClose={toggleDeleteModal}
        bodyContent={stringsConstants.DELETERECORDS}
        buttonArray={deleteModalButtons}
      />
    </Container>
  );
}
