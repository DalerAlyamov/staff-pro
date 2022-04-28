import React from "react";
import Component from "@components";
import constants from "@constants";

export const Applications: React.FC = (): JSX.Element => {
  return (
    <Component.Page
      title={constants.pageNames.app.applications}
    ></Component.Page>
  );
};
