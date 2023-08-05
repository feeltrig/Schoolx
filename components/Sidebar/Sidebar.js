import React from "react";
import {Center, Container, Flex, Icon} from "@chakra-ui/react";
import Link from "next/link";
import {useRouter} from "next/router";

import {FaHome, FaChild, FaChalkboardTeacher, FaUsers} from "react-icons/fa";
import {ImStatsBars} from "react-icons/im";

const Sidebar = () => {
  // INITIALIZATIONS
  // container style
  const containerStyle = {
    backgroundColor: "white",
    position: "sticky",
    fontWeight: 700,
    margin: 0,
    padding: 0,
    paddingBlock: "2rem",
    height: "100vh",
    display: "flex",
    flexFlow: "column",
    justifyContent: "start",
    paddingInline: "2rem",
  };

  const links = [
    {
      iconName: FaHome,
      title: "Home",
      path: "/",
    },
    {
      iconName: FaChalkboardTeacher,
      title: "Teachers",
      path: "/teachers",
    },
    {
      iconName: FaUsers,
      title: "Parents",
      path: "/parents",
    },
    {
      iconName: FaChild,
      title: "Students",
      path: "/students",
    },
  ];

  const router = useRouter();

  return (
    <Container maxW={"15rem"} sx={containerStyle}>
      <Flex h={"40px"} mb={"2rem"} alignItems="center">
        Logo
      </Flex>
      <Flex flexFlow={"column"} gap="1rem">
        {links.map((items, index) => {
          return (
            <div key={index}>
              <Link
                href={items.path}
                className={router.pathname == items.path ? "activeLink" : ""}
              >
                <Flex alignItems={"center"} gap={"1rem"}>
                  <Icon color={"black"} as={items.iconName} />
                  <p>{items.title.toString()}</p>
                </Flex>
              </Link>
            </div>
          );
        })}
      </Flex>
    </Container>
  );
};

export default Sidebar;
