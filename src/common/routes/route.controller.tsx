import React from "react";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import constants from "@constants";
import api from "@api";
import * as i from "@interfaces";
import { history } from "@utilities/history.utility";
import {
  LSAccessTokenName,
  LSRetryTokenName,
} from "@utilities/locastorage.utility";

interface IProps {
  children: React.ReactNode;
}

const appPathList: ReadonlyArray<string> = Object.values(constants.routes.app);
const authPathList: ReadonlyArray<string> = Object.values(
  constants.routes.auth
);

export const RouteController: React.FC<IProps> = React.memo(
  (props): JSX.Element => {
    const { pathname } = useLocation();

    const token: string | null = Cookies.get(LSAccessTokenName) || null;

    const retry_token: string | null = Cookies.get(LSRetryTokenName) || null;

    const [loading, setLoading] = React.useState(true);

    const resetToken = React.useCallback(async () => {
      if (!retry_token) return;

      const { status_code, payload }: i.Response = await api.auth.retryToken({
        retry_token,
      });

      if (status_code === 200) {
        Cookies.set(LSAccessTokenName, payload.access_token);
        Cookies.set(LSRetryTokenName, payload.retry_token);
      } else {
        Cookies.remove(LSRetryTokenName);
      }
    }, [retry_token]);

    const checkToken = React.useCallback(
      async (access_token: string | null) => {
        if (!access_token) return;
        const { status_code }: i.Response = await api.auth.checkAccessToken({
          access_token,
        });
        if (status_code !== 200 && retry_token) {
          resetToken();
        }
      },
      [resetToken, retry_token]
    );

    React.useEffect(() => {
      if (authPathList.includes(pathname) && token) {
        history.push(constants.routes.app.home);
      } else if (!authPathList.includes(pathname) && !token) {
        history.push(constants.routes.auth.login);
      }
      setLoading(false);
    }, [pathname, token]);

    React.useEffect(() => {
      if (!token) return;
      checkToken(token);
    }, [token, checkToken]);

    React.useEffect(() => {
      if (!retry_token || token) return;
      resetToken();
    }, [token, retry_token, resetToken]);

    if (loading) return <></>;
    return <React.Fragment>{props.children}</React.Fragment>;
  }
);
