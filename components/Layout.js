import {Container} from "@chakra-ui/react";
import React from "react";
import {FaChalkboardTeacher, FaChild, FaHome, FaUsers} from "react-icons/fa";

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
        bg={"purple.200"}
        maxW={"calc(100vw - 15rem)"}
        m={0}
        p={"2rem"}
        minH={"100vh"}
      >
        {children}
      </Container>
    </div>
  );
};

export default Layout;
