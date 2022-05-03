import React from "react";
import classNames from "classnames";
import styles from '@styles/modules';
import Component from '@components';
import Icon from '@icons';

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  isPassword?: boolean;
  hasEyeIcon?: boolean;
}

const Input: React.FC<IProps> = (props): JSX.Element => {

  const [isActive, setActive] = React.useState<boolean>(false);
  const [isVisible, setVisible] = React.useState<boolean>(false);

  const className = classNames(
    props.className,
    styles.input.root,
    (isActive || props.value.trim() !== "") && styles.input.__active,
    props.hasEyeIcon && styles.input.__hasEye,
  );

  return (
    <div className={className}>
      <div className={styles.input.placeholder}>
        {props.placeholder}
      </div>
      <Component.If 
        condition={!props.disabled}
        anotherChildren={
          <div className={styles.input.disabled_input}>
            {props.value}
          </div>
        }
      >
        <input 
          type={props.isPassword && !isVisible ? "password" : "text"}
          value={props.value}
          onChange={props.onChange}
          onFocus={() => setActive(true)}
          onBlur={() => {
            if (props.value.trim().length === 0) 
              setActive(false)
          }}
          className={styles.input.input}
        />
      </Component.If>
      <Component.If condition={props.hasEyeIcon}>
        <button className={styles.input.eye} onClick={() => setVisible(prev => !prev)}>
          <Component.If 
            condition={isVisible}
            anotherChildren={
              <Icon.VisibilityOff size={24} />
            }
          >
            <Icon.Visibility size={24} />
          </Component.If>
        </button>
      </Component.If>
    </div>
  );
};

export default Input;
