import React from "react";
import { RippleEffect } from "daler-react-ripple-effect";
import classNames from "classnames";
import styles from "@styles/modules";
import actions from "@redux/slice";
import { useAppDispatch, useAppSelector } from "@redux";
import Icon from "@icons";
import UI from '@ui';

const SelectApplicationType: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user)
  
  const [close, setClose] = React.useState<boolean>(false);
  const [type, setType] = React.useState<1 | 2>(1);

  const className = classNames(
    styles.modal.root,
    styles.modal.__size__small,
    close && styles.modal.__close
  );

  const handleMouseDown = React.useCallback((e: any) => {
    if (!e.target.closest("." + styles.modal.panel)) {
      setClose(true);
    }
  }, []);

  React.useEffect(() => {
    if (close) {
      window.setTimeout(() => {
        dispatch(actions.modal.closeModal());
      }, 200);
    }
  }, [close, dispatch]);

  React.useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, [handleMouseDown]);

  // вернуться
  // if (!user.data) return <></>
  return (
    <div className={className}>
      <div className={styles.modal.panel}>
        <button
          className={styles.modal.closeButtonWrap}
          onClick={() => setClose(true)}
        >
          <RippleEffect color="#E1E1E1" className={styles.modal.closeButton}>
            <Icon.Close size={20} />
          </RippleEffect>
        </button>

        <div className={styles.modal.title}>Выберите тип заявки</div>
        
        <UI.RadioButton side="left" className="mt-2" checked={type === 1} onClick={() => setType(1)}>
          Командировка
        </UI.RadioButton>
        
        <UI.RadioButton side="left" className="mt-1" checked={type === 2} onClick={() => setType(2)}>
          <div style={{transform: "translateY(2px)", fontSize: "1.125rem"}}>
            Отпуск
            <div className='lightText' style={{transform: "translateY(-6px)"}}>
              {/* Остаток отпускных дней – {user.data.vacation_days} */}
              Остаток отпускных дней – 24
            </div>
          </div>
        </UI.RadioButton>

        <UI.Button type="contained" className='mt-2' maxWidth>
          Создать
        </UI.Button>
      </div>
    </div>
  );
};

export default SelectApplicationType;
