import {
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Center,
} from "@chakra-ui/react";
import React from "react";
import {FaUserCircle} from "react-icons/fa";

const Headerbar = (props) => {
  const {menuList} = props;
  return (
    <HStack
      position={"absolute"}
      // w={"calc(100vw - 15rem)"}
      h={"4rem"}
      right={0}
      shadow="md"
      p={"2rem"}
      justify="end"
      bg={"white"}
      spacing="1rem"
      w={"full"}
    >
      <Center>
        <Icon as={FaUserCircle} />
      </Center>
      <Box>
        <Menu>
          <MenuButton variant="outline">Profile</MenuButton>
          <MenuList>
            {menuList &&
              menuList.map((menuitem, menuindex) => (
                <MenuItem
                  key={menuindex}
                  onClick={menuitem.onClick && menuitem.onClick}
                >
                  {menuitem.label}
                </MenuItem>
              ))}
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default Headerbar;
