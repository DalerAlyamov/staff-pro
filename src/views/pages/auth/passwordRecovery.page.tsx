import React from "react";
import Components from "@components";
import constants from "@constants";

export const PasswordRecovery: React.FC = (): JSX.Element => {
  return (
    <Components.Page
      title={constants.pageNames.auth.passwordRecovery}
    ></Components.Page>
  );
};
