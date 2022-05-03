import React from "react";
import Component from "@components";
import constants from "@constants";

export const Templates: React.FC = (): JSX.Element => {
  return (
    <Component.Page
      title={constants.pageNames.app.templates}
    ></Component.Page>
  );
};
