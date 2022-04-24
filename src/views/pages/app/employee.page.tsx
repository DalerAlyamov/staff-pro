import React from "react";
import Components from "@components";
import constants from "@constants";

export const Employee: React.FC = (): JSX.Element => {
  return (
    <Components.Page
      title={constants.pageNames.app.employee("Отдельная страница сотрудника")}
    ></Components.Page>
  );
};
