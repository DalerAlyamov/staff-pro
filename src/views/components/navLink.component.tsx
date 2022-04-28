import React from "react";
import classNames from 'classnames';
import { NavLink  as MyLink } from "react-router-dom";

interface iProps {
  to: string;
  className?: string;
  activeClassName?: string;
}

const NavLink: React.FC<iProps> = (props): JSX.Element => {
  return (
    <MyLink 
      draggable={false} 
      to={props.to} 
      className={({ isActive }) => isActive ? classNames(props.className, props.activeClassName) : props.className}
    >
      {props.children}
    </MyLink>
  );
};

export default NavLink;
