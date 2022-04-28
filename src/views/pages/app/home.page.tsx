import React from "react";
import Component from "@components";
import constants from "@constants";
import UI from '@ui';

export const Home: React.FC = (): JSX.Element => {
  return (
    <Component.Page title={constants.pageNames.app.home}>

      <div className="testtest">
        <UI.RadioButton>
          За границей
        </UI.RadioButton>
      </div>

    </Component.Page>
  );
};
