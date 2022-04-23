import React from "react";
import { Route, Routes } from "react-router-dom";
import Components from "@components";
import constants from "@constants";
import { App } from "./route.list";

export const RouteList: React.FC = () => {
  return (
    <React.Suspense fallback={<Components.Loading />}>
      <Routes>
        <Route path={constants.routes.app.home} element={<App.Home />} />
      </Routes>
    </React.Suspense>
  );
};
