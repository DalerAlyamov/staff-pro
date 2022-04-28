import React from "react";
import Component from "@components";
import constants from "@constants";

export const BusinessTrips: React.FC = (): JSX.Element => {
  return (
    <Component.Page
      title={constants.pageNames.app.businessTrips}
    ></Component.Page>
  );
};
