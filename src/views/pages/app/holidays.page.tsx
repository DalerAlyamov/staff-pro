import React from "react";
import Components from "@components";
import constants from "@constants";

export const Holidays: React.FC = (): JSX.Element => {
  return (
    <Components.Page
      title={constants.pageNames.app.holidays}
    ></Components.Page>
  );
};