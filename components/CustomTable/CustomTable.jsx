import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function CustomTable(props) {
  // table headers
  const {headers, onClick, data, customData} = props;

  return (
    <TableContainer
      overflowY={"scroll"}
      bg={"white"}
      height={"35rem"}
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
                onClick={() => onClick(teacher)}
              >
                <Td>{teacher.first_name}</Td>
                <Td>{teacher.last_name}</Td>
                <Td>{teacher.gender}</Td>
                <Td style={{wordWrap: "break-word"}}>{teacher.address}</Td>
                <Td>{teacher.phone}</Td>
                <Td>{teacher.email}</Td>
              </Tr>
            ))}
          {customData &&
            customData.map((custom, customIndex) => (
              <Tr
                key={customIndex}
                _hover={{color: "black", cursor: "pointer"}}
                onClick={() => onClick(custom)}
              >
                {Object.keys(custom)[0] !== "id" && (
                  <>
                    <Td>{Object.keys(custom)}</Td>
                    <Td>{Object.values(custom)}</Td>
                  </>
                )}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

// not completely dynamic
