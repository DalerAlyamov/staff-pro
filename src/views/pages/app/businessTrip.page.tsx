import React from "react";
import Component from "@components";
import constants from "@constants";

export const BusinessTrip: React.FC = (): JSX.Element => {
  return (
    <Component.Page
      title={constants.pageNames.app.businessTrip("Отдельная страница командировок")}
    ></Component.Page>
  );
};
