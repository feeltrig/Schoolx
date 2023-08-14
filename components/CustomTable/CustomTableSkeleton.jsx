import {Skeleton, Stack, Table, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {arrayFromLength} from "../../Funtions/dataFunctions";

const CustomTableSkeleton = (props) => {
  const {skeletonLines} = props;
  return (
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
          <Th key={""}>{""}</Th>
        </Tr>
      </Thead>
      {/* loading skeleton */}
      <Stack>
        {arrayFromLength(skeletonLines).map((item) => (
          <Tr>
            <Skeleton>
              <Td>{"aw"}</Td>
            </Skeleton>
          </Tr>
        ))}
      </Stack>
    </Table>
  );
};

export default CustomTableSkeleton;
