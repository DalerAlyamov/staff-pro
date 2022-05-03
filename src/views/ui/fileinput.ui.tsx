import React from "react";
import classNames from "classnames";
import styles from '@styles/modules';
import Icon from '@icons';
import Component from '@components';

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  accept?: string;
}

const TextArea: React.FC<IProps> = (props): JSX.Element => {

  const className = classNames(
    props.className,
    styles.fileInput.root,
    props.disabled && styles.fileInput.__disabled
  );

  return (
    <label className={className}>
      Загрузить документы
      <Component.If condition={!props.disabled}>
        <input 
          type="file"
          onChange={props.onChange}
          className={styles.fileInput.input}
          accept={props.accept}
        />
      </Component.If>
      <Icon.SaveAlt size={24} />
    </label>
  );
};

export default TextArea;
