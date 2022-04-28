import React from "react";
import Components from "@components";
import constants from "@constants";
import UI from '@ui';

export const Home: React.FC = (): JSX.Element => {
  return (
    <Components.Page title={constants.pageNames.app.home}>

      <div className="testtest">
        <UI.RadioButton>
          За границей
        </UI.RadioButton>
      </div>

    </Components.Page>
  );
};
