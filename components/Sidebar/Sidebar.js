import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Icon,
} from "@chakra-ui/react";
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
        <Accordion allowToggle>
          {links.map((items, index) => {
            if (items.subLinks.length > 0) {
              return (
                <AccordionItem key={index} style={{border: "none"}}>
                  <AccordionButton>
                    <Link
                      href={items.path}
                      className={
                        router.pathname == items.path ? "activeLink" : ""
                      }
                    >
                      <Flex alignItems={"center"} gap={"1rem"}>
                        <Icon color={"black"} as={items.iconName} />
                        <p>{items.title.toString()}</p>
                      </Flex>
                    </Link>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    {items.subLinks.map((sublink, sublinkindex) => (
                      <Link
                        key={sublinkindex}
                        href={sublink.path}
                        className={
                          router.pathname == sublink.path ? "activeLink" : ""
                        }
                      >
                        <Flex alignItems={"center"} gap={"1rem"}>
                          <Icon color={"black"} as={sublink.iconName} />
                          <p>{sublink.title.toString()}</p>
                        </Flex>
                      </Link>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              );
            } else {
              return (
                <AccordionItem key={index} style={{border: "none"}}>
                  <AccordionButton>
                    <Link
                      href={items.path}
                      className={
                        router.pathname == items.path ? "activeLink" : ""
                      }
                    >
                      <Flex alignItems={"center"} gap={"1rem"}>
                        <Icon color={"black"} as={items.iconName} />
                        <p>{items.title.toString()}</p>
                      </Flex>
                    </Link>
                  </AccordionButton>
                </AccordionItem>
              );
            }
          })}
        </Accordion>

        {/* {links.map((items, index) => {
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
        })} */}
      </Flex>
    </Container>
  );
};

export default Sidebar;
