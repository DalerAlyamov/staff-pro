import React from "react";
import Component from "@components";
import constants from "@constants";

export const Holiday: React.FC = (): JSX.Element => {
  return (
    <Component.Page
      title={constants.pageNames.app.holiday('Отдельная страница для отпуска')}
    ></Component.Page>
  );
};
