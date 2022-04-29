import React from "react";
import styles from "@styles/modules";
import actions from '@redux/slice';
import { useAppDispatch } from '@redux';
import classNames from 'classnames';
import UI from '@ui';
import Icon from '@icons';
import { RippleEffect } from 'daler-react-ripple-effect';

const EndOfVacation: React.FC = (): JSX.Element => {
  const [close, setClose] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const className = classNames(
    styles.modal.root,
    styles.modal.__size__medium,
    close && styles.modal.__close
  )

  const handleMouseDown = React.useCallback((e: any) => {
    if (!e.target.closest("." + styles.modal.panel)) {
      setClose(true);
    }
  }, []);

  React.useEffect(() => {
    if (close) {
      window.setTimeout(() => {
        dispatch(actions.modal.closeModal())
      }, 200);
    }
  }, [close, dispatch]);

  React.useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, [handleMouseDown]);

  return (
    <div className={className}>

      <div className={styles.modal.panel}>

        <button className={styles.modal.closeButtonWrap} onClick={() => setClose(true)}>
          <RippleEffect color='#E1E1E1' className={styles.modal.closeButton}>
            <Icon.Close size={20} />
          </RippleEffect>
        </button>
        
        <div className={styles.modal.title}>
          Отпуск будет заверешен
        </div>
        
        <div className={styles.modal.subtitle}>
          Вы уверены что готовы пойти на этот шаг?
        </div>

        <div className={styles.modal.buttonGroup}>

          <UI.Button type="outlined" onClick={() => setClose(true)}>
            Отменить
          </UI.Button>

          <UI.Button type="contained">
            Завершить
          </UI.Button>

        </div>

      </div>

    </div>
  );
};

export default EndOfVacation;
