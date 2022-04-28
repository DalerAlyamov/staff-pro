import React from "react";
import UI from "@ui";
import Icon from "@icons";
import styles from "@styles/modules";
import Component from "@components";

interface IProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  side?: "left" | "right";
  icon: React.ReactNode;
}

const ButtonWithIcon: React.FC<IProps> = (props): JSX.Element => {
  return (
    <UI.Button
      onClick={props.onClick}
      color="#D3D8FF"
      className={styles.exitButton.root}
    >
      <div className={styles.exitButton.wrap}>
        <Component.If condition={props.side !== "right"}>
          <div className={styles.exitButton.icon}>
            {props.icon}
          </div>
        </Component.If>
        {props.children}
        <Component.If condition={props.side === "right"}>
          <div className={styles.exitButton.icon}>
            {props.icon}
          </div>
        </Component.If>
      </div>
    </UI.Button>
  );
};

export default ButtonWithIcon;
