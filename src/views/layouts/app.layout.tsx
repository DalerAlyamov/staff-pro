import Component from '@components';
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="testtest">
        <Component.Navigation />
      </div>
      <Outlet />
    </>
  );
};

export default AppLayout;