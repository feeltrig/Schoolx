import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import React from "react";
import {
  FaChalkboardTeacher,
  FaChild,
  FaHome,
  FaUsers,
  FaAngleRight,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({children}) => {
  const links = [
    {
      iconName: FaHome,
      title: "Home",
      path: "/",
      subLinks: [],
    },
    {
      iconName: FaChalkboardTeacher,
      title: "Teachers",
      path: "/teachers",
      subLinks: [
        {
          iconName: FaUsers,
          title: "Parents",
          path: "/parents",
        },
        {
          iconName: FaUsers,
          title: "Add Teacher",
          path: "/addTeacher",
        },
        {
          iconName: FaUsers,
          title: "Teacher Performance Analysis",
          path: "/teacherPerformanceAnalysis",
        },
      ],
    },
    {
      iconName: FaUsers,
      title: "Parents",
      path: "/parents",
      subLinks: [],
    },
    {
      iconName: FaChild,
      title: "Students",
      path: "/students",
      subLinks: [],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <Sidebar links={links} />
      <Container
        bgGradient="linear(to-br, gray.300, gray.400)"
        maxW={"calc(100vw - 15rem)"}
        m={0}
        p={"2rem"}
        minH={"100vh"}
      >
        <Breadcrumb
          mb={"1rem"}
          spacing="8px"
          separator={<FaAngleRight color="gray.200" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
