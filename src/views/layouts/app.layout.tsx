import UI from '@ui';
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <UI.Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
