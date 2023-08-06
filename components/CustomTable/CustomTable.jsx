import {
  Skeleton,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {arrayFromLength} from "../../Funtions/dataFunctions";
import CustomNoData from "../CustomNoData/CustomNoData";

export default function CustomTable(props) {
  // table headers
  const {headers, onClick, data, customData, customTableStyles, isLoading} =
    props;

  const skeletonLines = 6;

  return (
    <>
      <TableContainer
        overflowY={(data && data.length < 1) || isLoading ? "hidden" : "scroll"}
        bg={"white"}
        maxH={data && data.length < 1 ? "max-content" : "35rem"}
        my={"2rem"}
        color="gray.600"
        scrollBehavior={"smooth"}
        customTableStyles={customTableStyles}
        borderRadius={"md"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "0px",
            height: 0,
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",

          "&::-webkit-scrollbar:horizontal": {
            height: "20px !important",
          },
        }}
      >
        {isLoading ? (
          <Table variant="simple">
            {/* loading skeleton */}
            <Stack>
              {arrayFromLength(skeletonLines).map((item) => (
                <Tr>
                  <Skeleton>
                    <Td></Td>
                  </Skeleton>
                </Tr>
              ))}
            </Stack>
          </Table>
        ) : (
          <Table variant="simple">
            <Thead>
              <Tr
                style={{
                  background: "gray.200",
                  fontWeight: 900,
                  boxShadow: "0 0 5px 1px rgba(0,0,0,0.3)",
                  color: "black",
                }}
              >
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
                      background: "gray.100",
                      color: "gray.800",
                      cursor: "pointer",
                    }}
                    onClick={() => onClick && onClick(teacher)}
                  >
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
        )}
      </TableContainer>

      {/* no data message */}
      {data && data.length < 1 && !isLoading && (
        <CustomNoData
          nodataMessage={"No data found"}
          textColor={"gray"}
          customNoDataStyles={{
            borderRadius: "1rem",
            height: "20rem",
            backgroundColor: "white",
            boxShadow: "0 0 10px 1px rgba(0,0,0,0.1)",
          }}
        />
      )}
    </>
  );
}

// not completely dynamic
