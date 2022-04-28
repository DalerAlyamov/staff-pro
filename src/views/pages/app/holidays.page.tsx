import React from "react";
import Component from "@components";
import constants from "@constants";

export const Holidays: React.FC = (): JSX.Element => {
  return (
    <Component.Page
      title={constants.pageNames.app.holidays}
    ></Component.Page>
  );
};
