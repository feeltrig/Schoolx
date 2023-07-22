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
    position: "fixed",
    color: "white",
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
      title: FaList,
      path: "/",
    },
    {
      title: FaHistory,
      path: "/history",
    },
    {
      title: ImStatsBars,
      path: "/stats",
    },
  ];
  const router = useRouter();

  return (
    <Container sx={containerStyle}>
      <Flex flexFlow={"column"} gap="3rem" px="2rem">
        {links.map((items, index) => {
          return (
            <div key={index}>
              <Link
                href={items.path}
                className={router.pathname == items.path ? "activeLink" : ""}
              >
                <Icon color={"black"} as={items.title} />
              </Link>
            </div>
          );
        })}
      </Flex>
    </Container>
  );
};

export default Sidebar;
