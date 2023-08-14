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
  FaPlus,
  FaCog,
  FaChartBar,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({children}) => {
  const links = [
    {
      iconName: FaChartBar,
      title: "Dashboard",
      path: "/",
      subLinks: [],
    },
    {
      iconName: FaChalkboardTeacher,
      title: "Teachers",
      path: "/teachers",
      subLinks: [
        {
          iconName: FaPlus,
          title: "Add Teacher",
          path: "/addTeacher",
        },
        {
          iconName: FaUsers,
          title: "Performance",
          path: "/teacherPerformance",
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
    {
      iconName: FaCog,
      title: "Settings",
      path: "/settings",
      subLinks: [],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1,
        maxHeight: "100vh",
      }}
    >
      <Sidebar links={links} />
      <Container
        bgGradient="linear(to-br, gray.300, gray.400)"
        maxW={"calc(100vw - 15rem)"}
        m={0}
        p={"2rem"}
        minH={"100vh"}
        overflowY={"scroll"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "0px",
            height: 0,
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",

          "&::-webkit-scrollbar:horizontal": {
            height: "20px !important",
          },
        }}
      >
        {/* <Breadcrumb
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
        </Breadcrumb> */}
        {children}
      </Container>
    </div>
  );
};

export default Layout;
