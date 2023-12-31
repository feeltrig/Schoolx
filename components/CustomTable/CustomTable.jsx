import {
  Box,
  Button,
  Checkbox,
  HStack,
  Icon,
  Tab,
  Table,
  TableContainer,
  TabList,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {FaList, FaEdit} from "react-icons/fa";
import {someArrayItemsFullfill} from "../../Funtions/dataFunctions";
import CustomNoData from "../CustomNoData/CustomNoData";
import CustomTableSkeleton from "./CustomTableSkeleton";

export default function CustomTable(props) {
  // table headers
  const {
    headers,
    onClick,
    data,
    customData,
    customTableStyles,
    isLoading,
    isEditing,
    handleTabToggle,
    checkboxOnChange,
    checkAllFields,
    handleDeleteSelected,
    tabsDisableCondition,
  } = props;

  const skeletonLines = 6;

  return (
    <>
      <Box my={"2rem"}>
        {!isLoading && (
          <HStack justify={"space-between"} my={"1rem"}>
            <Tabs onChange={handleTabToggle} isManual variant="unstyled">
              <TabList>
                <Tab
                  isDisabled={(data && data.length < 1) || tabsDisableCondition}
                >
                  <Icon color={"black"} as={FaList} />
                </Tab>
                <Tab
                  isDisabled={(data && data.length < 1) || tabsDisableCondition}
                >
                  <Icon color={"black"} as={FaEdit} />
                </Tab>
              </TabList>
            </Tabs>
            <Button
              disabled={
                (data && data.length < 1) ||
                !someArrayItemsFullfill(
                  data && data,
                  "isChecked",
                  true || tabsDisableCondition
                )
              }
              onClick={handleDeleteSelected}
              size={"sm"}
              m={"0.2rem"}
            >
              Delete Selected
            </Button>
          </HStack>
        )}
        <TableContainer
          shadow={"md"}
          overflowY={
            (data && data.length < 1) || isLoading ? "hidden" : "scroll"
          }
          maxH={data && data.length < 1 ? "max-content" : "35rem"}
          // color="gray.600"
          scrollBehavior={"smooth"}
          customTableStyles={customTableStyles}
          sx={{
            "&::-webkit-scrollbar": {
              width: "0px",
              height: 0,
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",

            "&::-webkit-scrollbar:horizontal": {
              height: "20px !important",
            },
          }}
        >
          {/* loading state */}
          {isLoading ? (
            <CustomTableSkeleton skeletonLines={skeletonLines} />
          ) : (
            data &&
            data.length > 0 && (
              <Table variant="unstyled" size="sm">
                <Thead>
                  <Tr
                    style={{
                      background: "white",
                      fontWeight: 900,
                      boxShadow: "0 0 5px 1px rgba(0,0,0,0.3)",
                      color: "black",
                      height: "2rem",
                    }}
                  >
                    {isEditing && (
                      <Th>
                        <Checkbox
                          onChange={(e) => {
                            checkAllFields(e);
                          }}
                        ></Checkbox>
                      </Th>
                    )}
                    {headers.map((header, headerIndex) => (
                      <Th key={headerIndex}>{header.replaceAll("_", " ")}</Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  {data &&
                    data.map((teacher, teacherIndex) => (
                      <Tr
                        key={teacherIndex}
                        _hover={{
                          background: "gray.200",
                          color: "gray.800",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          !isEditing && onClick && onClick(teacher)
                        }
                      >
                        {isEditing && (
                          <Td>
                            <Checkbox
                              value={teacher}
                              isChecked={teacher.isChecked}
                              onChange={(e) => checkboxOnChange(teacher, e)}
                            ></Checkbox>
                          </Td>
                        )}
                        {headers.map((header, headerIndex) => (
                          <Td key={headerIndex}>{teacher[header]}</Td>
                        ))}
                      </Tr>
                    ))}

                  {/* custom key value table */}
                  {customData !== undefined &&
                    customData.map((custom, customIndex) => (
                      <Tr
                        key={customIndex}
                        _hover={{color: "black", cursor: "pointer"}}
                        onClick={() => onClick && onClick(custom)}
                      >
                        {Object.keys(custom)[0] !== "id" && (
                          <>
                            <Td>{Object.keys(custom)[0].replace("_", " ")}</Td>
                            <Td>{Object.values(custom)}</Td>
                          </>
                        )}
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            )
          )}
        </TableContainer>

        {/* no data message */}
        {data && data.length < 1 && !isLoading && (
          <CustomNoData
            nodataMessage={"No data found"}
            textColor={"gray"}
            customNoDataStyles={{
              height: "20rem",
              backgroundColor: "white",
              boxShadow: "0 0 10px 1px rgba(0,0,0,0.1)",
            }}
          />
        )}
      </Box>
    </>
  );
}

// not completely dynamic
