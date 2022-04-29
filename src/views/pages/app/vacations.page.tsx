import React from "react";
import Component from "@components";
import constants from "@constants";

export const vacations: React.FC = (): JSX.Element => {
  return (
    <Component.Page
      title={constants.pageNames.app.vacations}
    ></Component.Page>
  );
};
