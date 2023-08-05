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
import CustomNoData from "../CustomNoData/CustomNoData";

export default function CustomTable(props) {
  // table headers
  const {
    headers,
    onClick,
    data,
    customData,
    noDataHeight,
    customTableStyles,
    isLoading,
  } = props;

  return (
    <>
      <TableContainer
        overflowY={data && data.length < 1 ? "hidden" : "scroll"}
        bg={"white"}
        maxH={data && data.length < 1 ? "max-content" : "35rem"}
        my={"2rem"}
        color="gray.600"
        borderRadius={"1rem"}
        scrollBehavior={"smooth"}
        customTableStyles={customTableStyles}
      >
        {isLoading ? (
          <Table variant="simple">
            <Stack>
              <Tr>
                <Skeleton>
                  <Td></Td>
                </Skeleton>
              </Tr>
              <Tr>
                <Skeleton>
                  <Td></Td>
                </Skeleton>
              </Tr>
              <Tr>
                <Skeleton>
                  <Td></Td>
                </Skeleton>
              </Tr>
              <Tr>
                <Skeleton>
                  <Td></Td>
                </Skeleton>
              </Tr>
              <Tr>
                <Skeleton>
                  <Td></Td>
                </Skeleton>
              </Tr>
              <Tr>
                <Skeleton>
                  <Td></Td>
                </Skeleton>
              </Tr>
              <Tr>
                <Skeleton>
                  <Td></Td>
                </Skeleton>
              </Tr>
            </Stack>
          </Table>
        ) : (
          <Table variant="simple">
            <Thead>
              <Tr>
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
                    _hover={{color: "black", cursor: "pointer"}}
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
