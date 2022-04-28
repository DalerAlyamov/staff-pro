import React from "react";
import Component from "@components";
import constants from "@constants";

export const Login: React.FC = (): JSX.Element => {
  return (
    <Component.Page
      title={constants.pageNames.auth.login}
    ></Component.Page>
  );
};
