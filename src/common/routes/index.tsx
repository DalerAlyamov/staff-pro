import React from "react";
import Routes from "@routes/routes";
import { RouteController } from "@routes/route.controller";

const AppRoutes: React.FC = () => {
  return (
    <RouteController>
      <Routes />
    </RouteController>
  );
};

export default AppRoutes;