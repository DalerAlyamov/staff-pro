import React from "react";
import classNames from "classnames";
import styles from "@styles/modules";

interface IProps {
  checked?: boolean;
}

const Radio: React.FC<IProps> = (props): JSX.Element => {
  const className = classNames(
    styles.radio.root,
    props.checked && styles.radio.checked
  );

  return (
    <div className={className}>
      <div className={styles.radio.circle} />
    </div>
  );
};

export default Radio;
