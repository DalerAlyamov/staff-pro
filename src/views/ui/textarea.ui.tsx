import React from "react";
import classNames from "classnames";
import styles from '@styles/modules';
import Component from '@components';
import TextareaAutosize from 'react-textarea-autosize';

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const TextArea: React.FC<IProps> = (props): JSX.Element => {

  const [isActive, setActive] = React.useState<boolean>(false);

  const className = classNames(
    props.className,
    styles.textarea.root,
    (isActive || props.value.trim() !== "") && styles.input.__active
  );

  return (
    <div className={className}>
      <div className={styles.input.placeholder}>
        {props.placeholder}
      </div>
      <Component.If 
        condition={!props.disabled}
        anotherChildren={
          <div className={styles.textarea.disabled_textarea}>
            {props.value}
          </div>
        }
      >
        <TextareaAutosize 
          value={props.value}
          onChange={props.onChange}
          onFocus={() => setActive(true)}
          minRows={5}
          onBlur={() => {
            if (props.value.trim().length === 0) 
              setActive(false)
          }}
          className={styles.textarea.textarea}
        />
      </Component.If>
    </div>
  );
};

export default TextArea;
