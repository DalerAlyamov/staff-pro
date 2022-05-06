import React from "react";
import UI from "@ui";
import Component from "@components";
import constants from "@constants";
import styles from "@styles/modules";
import { useAppDispatch } from "@redux";
import services from "@services";
import { RippleEffect } from "daler-react-ripple-effect";

export const Login: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [mail, setMail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [remindMe, setRemindMe] = React.useState<boolean>(false);
  const [isValid, setValid] = React.useState<boolean>(false);
  const [isPending, setPending] = React.useState<boolean>(false);

  const handleLogin = React.useCallback(() => {
    setPending(true);
    if (isValid) 
    setTimeout(async () => {
      await dispatch(services.auth.login({ mail, password }, remindMe));
      setPending(false)
    }, 100);
  }, [dispatch, mail, password, remindMe, isValid]);

  React.useEffect(() => {
    if (mail.trim().length < 4) {
      setValid(false);
    } else if (!mail.includes("@")) {
      setValid(false);
    } else if (password.length < 1) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [mail, password]);

  return (
    <Component.Page title={constants.pageNames.auth.login}>
      <form
        className={styles.auth.panel}
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <UI.Logotype />

        <div className={styles.auth.title}>
          <div className={styles.auth.h1}>Вход</div>
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

            <UI.Input
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder="Пароль"
              isPassword
              hasEyeIcon
            />

            <UI.CheckboxButton
              checked={remindMe}
              onClick={() => setRemindMe((prev) => !prev)}
            >
              Запомнить меня
            </UI.CheckboxButton>
          </Component.FlexBlock>
        </Component.WidthLimiter>

        <UI.Button
          isSubmit
          type="contained"
          color="#5B6CED"
          disabled={!isValid || isPending}
        >
          Войти
        </UI.Button>

        <RippleEffect color="#E6E8ED" className={styles.auth.forgotPassword}>
          <Component.Link to={constants.routes.auth.passwordRecovery}>Забыли пароль?</Component.Link>
        </RippleEffect>
      </form>
    </Component.Page>
  );
};
