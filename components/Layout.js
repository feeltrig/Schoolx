import {Container} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {
  FaChalkboardTeacher,
  FaChild,
  FaUsers,
  FaPlus,
  FaCog,
  FaChartBar,
} from "react-icons/fa";
import {useRouter} from "next/router";
import Router from "next/router";
import {signOut, signIn} from "next-auth/react";

import Sidebar from "../components/Sidebar/Sidebar";
import Headerbar from "./HeaderBar/Headerbar";
import {gotoPage} from "../Funtions/routingFunctions";

const Layout = ({children}) => {
  const router = useRouter();
  const [showSideBar, setshowSideBar] = useState(true);
  const links = [
    {
      iconName: FaChartBar,
      title: "Dashboard",
      path: "/dashboard",
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
    {
      iconName: FaCog,
      title: "Profile",
      path: "/settings",
      subLinks: [],
    },
  ];
  const noSidebarUrls = ["login", "register", "signin"];
  const headerMenu = [
    {
      label: "Sign In",
      onClick: () => {
        gotoPage(Router, "/authpages/signin");
      },
    },
    {
      label: "Login",
      onClick: () => {
        signIn();
      },
    },

    {
      label: "logout",
      onClick: () => {
        signOut();
      },
    },
    {
      label: "change password",
    },
  ];

  // check urls to show/hide sidebar
  useEffect(() => {
    for (let linkTags of noSidebarUrls) {
      if (router.asPath.includes(linkTags)) {
        setshowSideBar(false);
      }
    }
  }, [router.events]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1,
        maxHeight: "100vh",
        backgroundColor: "white",
        width: "100vw",
      }}
    >
      {showSideBar && <Sidebar links={links} />}

      <div
        style={{display: "flex", flex: 1, position: "relative", width: "100vw"}}
      >
        {showSideBar && <Headerbar menuList={headerMenu} />}
        <Container
          bg={"gray.100"}
          maxW={("calc(100vw - 15rem)", "100vw")}
          m={0}
          p={"1rem"}
          pt={"5rem"}
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
          {children}
        </Container>
      </div>
    </div>
  );
};

export default Layout;
