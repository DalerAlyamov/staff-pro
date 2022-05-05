import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = (): JSX.Element => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      position: "fixed",
      top: 0,
      left: 0
    }}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
