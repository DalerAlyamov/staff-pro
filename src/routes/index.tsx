import React from "react";
import { RouteList } from "./routes";
import { RouteController } from "./route.controller";

export const Routes: React.FC = () => {
  return (
    <RouteController>
      <RouteList />
    </RouteController>
  );
};
