import React from "react";
import classNames from 'classnames';
import styles from '@styles/modules';
import UI from '@ui';

interface IProps {
  children: React.ReactNode;
  checked?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RadioButton: React.FC<IProps> = (props): JSX.Element => {

  const [checked, setChecked] = React.useState<boolean | undefined>(props.checked);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setChecked(!checked);
    if (props.onClick) {
      props.onClick(e);
    }
  }

  React.useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  return (
    <button className={styles.radioButton.root} onClick={handleClick}>

      <div className={styles.radioButton.text}>
        {props.children}
      </div>
      
      <UI.Radio checked={checked} />

    </button>
  );
};

export default RadioButton;
