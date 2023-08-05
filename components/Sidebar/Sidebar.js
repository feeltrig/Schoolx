import React from "react";
import {Container, Flex, Icon} from "@chakra-ui/react";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import profilePic from "../../assests/svgs/mainlogo.png";

const Sidebar = (props) => {
  const {links} = props;

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

  const router = useRouter();

  return (
    <Container w={"15rem"} sx={containerStyle}>
      <Image src={profilePic} alt="Picture of the author" />
      <Flex flexFlow={"column"} gap="1rem">
        {links.map((items, index) => {
          return (
            <div
              key={index}
              style={{
                cursor: "pointer",
              }}
            >
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
