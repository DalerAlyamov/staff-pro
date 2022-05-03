import React from "react";
import { Link as MyLink } from "react-router-dom";

interface iProps {
  to: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Link: React.FC<iProps> = (props): JSX.Element => {
  return (
    <MyLink draggable={false} to={props.to} className={props.className} onClick={props.onClick}>
      {props.children}
    </MyLink>
  );
};

export default Link;
