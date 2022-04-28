import React from "react";
import Component from "@components";
import constants from "@constants";

export const Employee: React.FC = (): JSX.Element => {
  return (
    <Component.Page
      title={constants.pageNames.app.employee("Отдельная страница сотрудника")}
    ></Component.Page>
  );
};
