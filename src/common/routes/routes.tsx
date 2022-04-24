import React from "react";
import { Route, Routes } from "react-router-dom";
import Components from "@components";
import constants from "@constants";
import App from "@routes/route.list";

const RouteList: React.FC = () => {
  return (
    <React.Suspense fallback={<Components.Loading />}>
      <Routes>
        <Route index element={<App.Home />} />
        <Route path={constants.routes.app.businessTrips}>
          <Route index element={<App.BusinessTrips />} />
          <Route path={constants.routes.app.businessTrip + ':id'} element={<App.BusinessTrip />} />
        </Route>
        <Route path={constants.routes.app.home} element={<App.Holidays />} />
      </Routes>
    </React.Suspense>
  );
};

export default RouteList;