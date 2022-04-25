import React from "react";
import Components from "@components";
import constants from "@constants";

export const Holiday: React.FC = (): JSX.Element => {
  return (
    <Components.Page
      title={constants.pageNames.app.holiday('Отдельная страница для отпуска')}
    ></Components.Page>
  );
};