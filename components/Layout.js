import React from "react";
import {FaChalkboardTeacher, FaChild, FaHome, FaUsers} from "react-icons/fa";

import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({children}) => {
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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Sidebar links={links} />
      <div style={{display: "flex", flexGrow: 1}}>{children}</div>
    </div>
  );
};

export default Layout;
