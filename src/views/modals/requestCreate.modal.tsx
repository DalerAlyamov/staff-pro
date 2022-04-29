import React from "react";
import { RippleEffect } from "daler-react-ripple-effect";
import classNames from "classnames";
import styles from "@styles/modules";
import actions from "@redux/slice";
import { useAppDispatch } from "@redux";
import Icon from "@icons";
import UI from '@ui';

const RequestCreate: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  
  const [close, setClose] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>("");

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

        <div className={styles.modal.title}>Название заявки</div>
        <div className={styles.modal.subtitle}>Чем проще название, тем легче искать в будущем заявки</div>

        <UI.Input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          placeholder="Название"
          className="mt-3 w100p"
        />
        
        <UI.Button disabled={name.trim() === ""} type='contained' maxWidth className="mt-3">
          Создать
        </UI.Button>
      </div>
    </div>
  );
};

export default RequestCreate;
