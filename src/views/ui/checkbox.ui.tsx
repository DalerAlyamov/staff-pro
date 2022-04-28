import React from "react";
import classNames from "classnames";
import Component from "@components";
import Icon from "@icons";
import styles from "@styles/modules";

interface IProps {
  checked?: boolean;
}

const Checkbox: React.FC<IProps> = (props): JSX.Element => {
  const className = classNames(
    styles.checkbox.root,
    props.checked && styles.checkbox.checked
  );

  return (
    <div className={className}>
      <Component.If
        anotherChildren={<Icon.CheckBoxOutlineBlank size={26} />}
        condition={props.checked}
      >
        <Icon.CheckBox size={26} />
      </Component.If>
    </div>
  );
};

export default Checkbox;
