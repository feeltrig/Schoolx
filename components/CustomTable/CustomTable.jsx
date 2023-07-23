import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import fakeDb from "../../fakeDb/fakeDb.json";

export default function CustomTable(props) {
  // table headers
  const {headers, onClick} = props;

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
          {fakeDb.map((teacher, teacherIndex) => (
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
        </Tbody>
      </Table>
    </TableContainer>
  );
}
