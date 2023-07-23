import React from "react";

import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({children}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "2px solid",
      }}
    >
      <Sidebar />
      <div style={{display: "flex", flexGrow: 1}}>{children}</div>
    </div>
  );
};

export default Layout;
