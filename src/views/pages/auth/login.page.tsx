import React from "react";
import Components from "@components";
import constants from "@constants";

export const Login: React.FC = (): JSX.Element => {
  return (
    <Components.Page
      title={constants.pageNames.auth.login}
    ></Components.Page>
  );
};
