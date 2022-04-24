import React from "react";
import RouteList from "@routes/routes";
import { RouteController } from "@routes/route.controller";

export const Routes: React.FC = () => {
  return (
    <RouteController>
      <RouteList />
    </RouteController>
  );
};
