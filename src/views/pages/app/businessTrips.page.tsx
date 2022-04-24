import React from "react";
import Components from "@components";
import constants from "@constants";

export const BusinessTrips: React.FC = (): JSX.Element => {
  return (
    <Components.Page
      title={constants.pageNames.app.businessTrips}
    ></Components.Page>
  );
};
