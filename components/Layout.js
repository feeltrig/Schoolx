import React from "react";

import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({children}) => {
  return (
    <>
      <Sidebar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
