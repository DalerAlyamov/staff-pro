import React from "react";
import Component from "@components";
import constants from "@constants";
import UI from '@ui';
import styles from '@styles/modules';
import services from '@services';
import { blurAll, QueryToObject } from '@functions';
import { useAppDispatch } from '@redux';
import { history } from '@utilities/history.utility';
import api from '@api';
import * as i from '@interfaces';
import { toast } from 'react-toastify';

export const ChangePassword: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [passwordVisibility, setPasswordVisibility] = React.useState<boolean>(false);
  const [isValid, setValid] = React.useState<boolean>(false);
  const [isPending, setPending] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [resetToken, setResetToken] = React.useState<string>("");

  const handleChangePassword = React.useCallback(async () => {
    blurAll();
    setPending(true);
    if (isValid) 
      await dispatch(services.auth.changePasword({ password, reset_token: resetToken }));
    setPending(false);
  }, [dispatch, isValid, password, resetToken]);

  const checkQueryToken = React.useCallback(async (token: string) => {
    const { status_code, message }: i.Response= await api.auth.checkResetPasswordToken({token});
    if (status_code === 200) {
      setLoading(false);
      setResetToken(token);
    } else {
      toast.error(message);
      history.replace(constants.routes.auth.login);
    }
  }, []);

  React.useEffect(() => {
    if (password.trim().length < 1) {
      setValid(false);
    } else if (confirmPassword !== password) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [confirmPassword, password]);

  React.useEffect(() => {
    const searchParams = QueryToObject();
    if (!searchParams.token) {
      return history.replace(constants.routes.auth.login);
    } 
    checkQueryToken(searchParams.token);
  }, [checkQueryToken]);

  if (isLoading) return <></>
  return (
    <Component.Page title={constants.pageNames.auth.changePassword}>
      <form
        className={styles.auth.panel}
        onSubmit={(e) => {
          e.preventDefault();
          handleChangePassword();
        }}
      >
        <UI.Logotype />

        <div className={styles.auth.title}>
          <div className={styles.auth.h1}>Создание нового<br />пароля</div>
        </div>

        <Component.WidthLimiter width={428}>
          <Component.FlexBlock
            direction="column"
            gap={24}
            alignItems="flex-start"
          >
            <UI.Input
              isPassword
              hasEyeIcon
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              onChangeVisibility={() => setPasswordVisibility(prev => !prev)}
              placeholder="Новый пароль"
            />
            <UI.Input
              isPassword={!passwordVisibility}
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
              placeholder="Повторите пароль"
            />
          </Component.FlexBlock>
        </Component.WidthLimiter>

        <UI.Button
          isSubmit
          type="contained"
          color="#5B6CED"
          disabled={!isValid || isPending}
        >
          Сохранить
        </UI.Button>
      </form>
    </Component.Page>
  );
};
