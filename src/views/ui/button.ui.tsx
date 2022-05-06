import React from "react";
import styles from "@styles/modules";
import classNames from "classnames";
import { RippleEffect } from "daler-react-ripple-effect";
import Component from "@components";

interface IProps {
  children: React.ReactNode;
  isSubmit?: boolean;
  type?: "outlined" | "contained";
  disabled?: boolean;
  color?: string | undefined;
  className?: string; 
  maxWidth?: boolean;
  size?: "small" | "medium" | "large";
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
    props.maxWidth && styles.button.maxWidth,
    styles.button.root,
    props.disabled && styles.button.__disabled,
    props.size === "small" && styles.button.__size__small,
    // props.size === "medium" && styles.button.__size__medium,
    // props.size === "large" && styles.button.__size__large,
    props.type === "contained" && styles.button.__type__contained,
    props.type === "outlined" && styles.button.__type__outlined
  );

  return (
    <Component.If
      condition={!props.disabled}
      anotherChildren={<div className={className}>{props.children}</div>}
    >
      <button
        type={props.isSubmit ? 'submit' : 'button'}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        onMouseLeave={props.onMouseLeave}
        onMouseOver={props.onMouseOver}
        onMouseMove={props.onMouseMove}
        onMouseEnter={props.onMouseEnter}
        onClick={props.onClick}
        style={{
          width: props.maxWidth ? "100%" : "auto",
        }}
      >
        <RippleEffect color={props.color || (props.type === "outlined" ? "#B8C0FF" : "#7D8CFF")} className={className}>
          {props.children}
        </RippleEffect>
      </button>
    </Component.If>
  );
};

export default Button;
