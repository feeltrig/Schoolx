import {
  Center,
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
  const {headers, onClick, data, customData, noDataHeight} = props;
  console.log(customData);

  return (
    <>
      <TableContainer
        overflowY={data && data.length < 1 ? "hidden" : "scroll"}
        bg={"white"}
        height={data && data.length < 1 ? "max-content" : "35rem"}
        my={"2rem"}
        color="gray.600"
        borderRadius={"1rem"}
        scrollBehavior={"smooth"}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              {headers.map((header, headerIndex) => (
                <Th key={headerIndex}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((teacher, teacherIndex) => (
                <Tr
                  _hover={{color: "black", cursor: "pointer"}}
                  onClick={() => onClick && onClick(teacher)}
                >
                  <Td>{teacher.first_name}</Td>
                  <Td>{teacher.last_name}</Td>
                  <Td>{teacher.gender}</Td>
                  <Td style={{wordWrap: "break-word"}}>{teacher.address}</Td>
                  <Td>{teacher.phone}</Td>
                  <Td>{teacher.email}</Td>
                </Tr>
              ))}
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
      </TableContainer>

      {/* no data message */}
      {data && data.length < 1 && (
        <CustomNoData
          nodataMessage={"No data found"}
          height={"20rem"}
          backgroundColor={"gray"}
          textColor={"white"}
          customContainerStyle={{borderRadius: "2rem"}}
        />
      )}
    </>
  );
}

// not completely dynamic
