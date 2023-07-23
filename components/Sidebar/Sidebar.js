import React from "react";
import {Container, Flex, Icon} from "@chakra-ui/react";
import Link from "next/link";
import {useRouter} from "next/router";

import {FaList, FaHistory} from "react-icons/fa";
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
    paddingBlock: "3rem",
    height: "100vh",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
  };

  const links = [
    {
      iconName: FaList,
      title: "Home",
      path: "/",
    },
    {
      iconName: FaHistory,
      title: "Teachers",
      path: "/teachers",
    },
    {
      iconName: ImStatsBars,
      title: "Parents",
      path: "/parents",
    },
    {
      iconName: ImStatsBars,
      title: "Students",
      path: "/students",
    },
  ];

  const router = useRouter();

  return (
    <Container maxW={"12rem"} sx={containerStyle}>
      <Flex flexFlow={"column"} gap="3rem" px="2rem">
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
