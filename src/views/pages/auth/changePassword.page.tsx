import React from "react";
import Component from "@components";
import constants from "@constants";

export const ChangePassword: React.FC = (): JSX.Element => {
  return (
    <Component.Page
      title={constants.pageNames.auth.changePassword}
    ></Component.Page>
  );
};
