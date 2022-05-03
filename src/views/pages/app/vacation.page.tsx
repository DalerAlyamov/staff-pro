import React from "react";
import Component from "@components";
import constants from "@constants";

export const Vacation: React.FC = (): JSX.Element => {
  return (
    <Component.Page
      title={constants.pageNames.app.vacation('Отдельная страница для отпуска')}
    ></Component.Page>
  );
};
