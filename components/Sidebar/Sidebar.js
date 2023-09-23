import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Container,
  Flex,
  Icon,
  HStack,
  Show,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import profilePic from "../../assests/svgs/mainlogo.png";
import {CustomStyleConstants} from "../../Utils/customStyleConstants";

const Sidebar = (props) => {
  const {links} = props;

  // INITIALIZATIONS
  // container style
  const containerStyle = {
    backgroundColor: "white",
    margin: 0,
    padding: 0,
    paddingBlock: "2rem",
    height: "100vh",
    display: "flex",
    flexFlow: "column",
    justifyContent: "start",
    paddingInline: "1rem",
  };

  const router = useRouter();

  return (
    <Show breakpoint="(min-width: 880px)">
      <Container w={"15rem"} sx={containerStyle} shadow="md" zIndex={9}>
        <Box
          h={"5rem"}
          my={"1rem"}
          style={{width: "100%", position: "relative"}}
        >
          <Image
            src={profilePic}
            alt="school logo"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Flex flexFlow={"column"} my={"1rem"}>
          <Accordion allowToggle>
            {links.map((items, index) => {
              if (items.subLinks.length > 0) {
                // sublinks
                return (
                  <AccordionItem key={index} style={{border: "none"}}>
                    <AccordionButton>
                      <HStack gap={"1rem"} justify={"space-between"} w={"full"}>
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
                      </HStack>
                    </AccordionButton>
                    <AccordionPanel py={"1rem"}>
                      {items.subLinks.map((sublink, sublinkindex) => (
                        <AccordionButton>
                          <Link
                            key={sublinkindex}
                            href={sublink.path}
                            className={
                              router.pathname == sublink.path
                                ? "activeLink"
                                : ""
                            }
                          >
                            <Flex alignItems={"center"} gap={"1rem"}>
                              <Icon color={"black"} as={sublink.iconName} />
                              <p style={{fontWeight: "normal"}}>
                                {sublink.title.toString()}
                              </p>
                            </Flex>
                          </Link>
                        </AccordionButton>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                );
              } else {
                return (
                  <AccordionItem key={index} style={{border: "none"}}>
                    <Link
                      href={items.path}
                      className={
                        router.pathname == items.path ? "activeLink" : ""
                      }
                    >
                      <AccordionButton>
                        <Flex alignItems={"center"} gap={"1rem"}>
                          <Icon color={"black"} as={items.iconName} />
                          <p>{items.title.toString()}</p>
                        </Flex>
                      </AccordionButton>
                    </Link>
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
    </Show>
  );
};

export default Sidebar;
