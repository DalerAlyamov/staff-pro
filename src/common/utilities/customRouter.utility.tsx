import React from "react";
import { Router } from "react-router-dom";
import { history } from "@utilities/history.utility";

interface IProps {
  children: React.ReactNode;
}

export const CustomRouter: React.FC<IProps> = ({ children }) => {
  const [state, setState] = React.useState<any>({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), []);

  return (
    <Router
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};
