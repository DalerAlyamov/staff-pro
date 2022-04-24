import React from "react";
import Components from "@components";
import constants from "@constants";

export const Home: React.FC = (): JSX.Element => {
  return (
    <Components.Page
      title={constants.pageNames.app.home}
    ></Components.Page>
  );
};
