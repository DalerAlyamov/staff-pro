import React from "react";
import styles from '@styles/modules';
import UI from '@ui';
import Component from '@components';
import classNames from 'classnames';

interface IProps {
  children: React.ReactNode;
  checked?: boolean;
  side?: "left" | "right";
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RadioButton: React.FC<IProps> = (props): JSX.Element => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
  }

  const className = classNames(
    props.className,
    styles.radioButton.root
  )

  return (
    <button className={className} onClick={handleClick}>

      <Component.If condition={props.side === "left"}>
        <UI.Radio checked={props.checked} />
      </Component.If>

      <div className={styles.radioButton.text}>
        {props.children}
      </div>

      <Component.If condition={props.side !== "left"}>
        <UI.Radio checked={props.checked} />
      </Component.If>
      

    </button>
  );
};

export default RadioButton;
