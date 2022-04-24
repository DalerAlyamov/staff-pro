import React from "react";
import Components from "@components";
import constants from "@constants";

export const BusinessTrip: React.FC = (): JSX.Element => {
  return (
    <Components.Page
      title={constants.pageNames.app.businessTrip("Отдельная страница командировок")}
    ></Components.Page>
  );
};
