import React from "react";
import { RippleEffect } from "daler-react-ripple-effect";
import classNames from "classnames";
import styles from "@styles/modules";
import actions from "@redux/slice";
import { useAppDispatch } from "@redux";
import Icon from "@icons";

const RequestCreated: React.FC = (): JSX.Element => {
  const [close, setClose] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const className = classNames(
    styles.modal.root,
    styles.modal.__size__medium,
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

        <div className={styles.modal.check}>
          <Icon.Check size={40} />
        </div>

        <div className={styles.modal.title}>Заявка создана</div>
        <div className={styles.modal.subtitle}>Ваша заявка отправлена на рассмотрение.<br/>Всю информацию можете найти в истории</div>

      </div>
    </div>
  );
};

export default RequestCreated;
