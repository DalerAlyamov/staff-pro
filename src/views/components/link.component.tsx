import React from "react";
import { Link as MyLink } from "react-router-dom";

interface iProps {
  to: string;
  className?: string;
}

const Link: React.FC<iProps> = (props): JSX.Element => {
  return (
    <MyLink draggable={false} to={props.to} className={props.className}>
      {props.children}
    </MyLink>
  );
};

export default Link;
