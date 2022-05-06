import React from "react";
import Component from "@components";
import constants from "@constants";
import styles from '@styles/modules';
import UI from '@ui';
import services from '@services';
import { useAppDispatch } from '@redux';
import { blurAll } from '@functions';

export const PasswordRecovery: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [mail, setMail] = React.useState<string>("");
  const [isValid, setValid] = React.useState<boolean>(false);
  const [isPending, setPending] = React.useState<boolean>(false);

  const handleSendToMail = React.useCallback(async () => {
    blurAll();
    setPending(true);
    if (isValid) 
      await dispatch(services.auth.resetPassword({ mail }));
    setPending(false);
  }, [dispatch, mail, isValid]);

  React.useEffect(() => {
    if (mail.trim().length < 4) {
      setValid(false);
    } else if (!mail.includes("@")) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [mail]);

  return (
    <Component.Page title={constants.pageNames.auth.passwordRecovery}>
      <form
        className={styles.auth.panel}
        onSubmit={(e) => {
          e.preventDefault();
          handleSendToMail();
        }}
      >
        <UI.Logotype />

        <div className={styles.auth.title}>
          <div className={styles.auth.h1}>Восстановление<br />пароля</div>
          <div className={styles.auth.h2}>Вам на почту будет отправлен новый пароль<br />для входа</div>
        </div>

        <Component.WidthLimiter width={428}>
          <Component.FlexBlock
            direction="column"
            gap={24}
            alignItems="flex-start"
          >
            <UI.Input
              value={mail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMail(e.target.value)
              }
              placeholder="Почта"
            />
          </Component.FlexBlock>
        </Component.WidthLimiter>

        <UI.Button
          isSubmit
          type="contained"
          color="#5B6CED"
          disabled={!isValid || isPending}
        >
          Отправить
        </UI.Button>
      </form>
    </Component.Page>
  );
};
