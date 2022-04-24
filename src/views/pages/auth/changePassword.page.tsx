import React from "react";
import Components from "@components";
import constants from "@constants";

export const ChangePassword: React.FC = (): JSX.Element => {
  return (
    <Components.Page
      title={constants.pageNames.auth.changePassword}
    ></Components.Page>
  );
};
