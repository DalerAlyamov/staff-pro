import React from "react";
import styles from "@styles/modules";
import classNames from "classnames";
import { RippleEffect } from "daler-react-ripple-effect";
import Components from "@components";

interface IProps {
  children: React.ReactNode;
  type?: "outlined" | "contained";
  disabled?: boolean;
  color?: string | undefined;
  className?: string; 
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseMove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IProps> = (props): JSX.Element => {
  const className = classNames(
    props.className,
    styles.button.root,
    props.disabled && styles.button.__disabled,
    props.type === "contained" && styles.button.__type__contained,
    props.type === "outlined" && styles.button.__type__outlined
  );

  return (
    <Components.If
      condition={!props.disabled}
      anotherChildren={<div className={className}>{props.children}</div>}
    >
      <button
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        onMouseLeave={props.onMouseLeave}
        onMouseOver={props.onMouseOver}
        onMouseMove={props.onMouseMove}
        onMouseEnter={props.onMouseEnter}
        onClick={props.onClick}
      >
        <RippleEffect color={props.color || "#7D8CFF"} className={className}>
          {props.children}
        </RippleEffect>
      </button>
    </Components.If>
  );
};

export default Button;
