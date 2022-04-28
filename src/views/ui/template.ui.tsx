import React from "react";
import classNames from "classnames";

interface IProps {}

const Template: React.FC<IProps> = (props): JSX.Element => {
  const className = classNames();

  return <div className={className}>Template</div>;
};

export default Template;
