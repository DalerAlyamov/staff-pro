import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AppLayout;