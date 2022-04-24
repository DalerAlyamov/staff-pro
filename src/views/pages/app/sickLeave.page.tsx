import React from "react";
import Components from "@components";
import constants from "@constants";

export const SickLeave: React.FC = (): JSX.Element => {
  return (
    <Components.Page
      title={constants.pageNames.app.sickLeave('Отдельная страница для больничной')}
    ></Components.Page>
  );
};
