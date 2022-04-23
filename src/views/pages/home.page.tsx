import React from "react";
import Components from '@components';
import { pageNames } from '@constants';

export const Home: React.FC = (): JSX.Element => {
  return (
    <Components.Page title={pageNames.auth.template}>
    </Components.Page>
  );
};
