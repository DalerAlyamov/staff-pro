import React from "react";

interface IProps {}

export const RouteController: React.FC<IProps> = React.memo(
  (props): JSX.Element => <React.Fragment>{props.children}</React.Fragment>
);
