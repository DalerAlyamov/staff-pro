import React from "react";
import classNames from 'classnames';
import styles from '@styles/modules';
import UI from '@ui';

interface IProps {
  children: React.ReactNode;
  checked?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CheckboxButton: React.FC<IProps> = (props): JSX.Element => {

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
    <button className={styles.checkboxButton.root} onClick={handleClick}>
      
      <UI.Checkbox checked={checked} />

      <div className={styles.checkboxButton.text}>
        {props.children}
      </div>

    </button>
  );
};

export default CheckboxButton;
