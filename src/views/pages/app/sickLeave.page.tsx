import React from "react";
import Component from "@components";
import constants from "@constants";

export const SickLeave: React.FC = (): JSX.Element => {
  return (
    <Component.Page
      title={constants.pageNames.app.sickLeave('Отдельная страница для больничной')}
    ></Component.Page>
  );
};
