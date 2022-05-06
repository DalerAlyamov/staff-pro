import api from "@api";
import Cookies from "js-cookie";
import constants from "@constants";
import * as i from "@interfaces";
import { AppDispatch } from "@redux";
import actions from "@redux/slice";
import { history } from "@utilities/history.utility";
import { toast } from "react-toastify";
import {
  LSAccessTokenName,
  LSRetryTokenName,
} from "@utilities/locastorage.utility";

const login =
  (body: i.Api_Auth_Login_Body, remind: boolean): any =>
  async (dispatch: AppDispatch) => {
    try {
      const { status_code, message, payload }: i.Response =
        await api.auth.login(body);
      if (status_code === 200) {
        history.push(constants.routes.app.home);
        dispatch(actions.user.initUser(payload.user));
        Cookies.set(LSAccessTokenName, payload.access_token);
        if (remind) Cookies.set(LSRetryTokenName, payload.retry_token);
      } else {
        toast.error(message);
      }
    } catch (error: any) {
      toast.error("Непредвиденная ошибка. Её код: " + error.response.status);
    }
  };

const resetPassword = (body: i.Api_Auth_ResetPassword_Body): any =>
  async (dispatch: AppDispatch) =>  {
    try {
      const { status_code, message }: i.Response =
        await api.auth.resetPassword(body);
      if (status_code === 200) {
        dispatch(actions.modal.openModal({
          key: constants.modalKeys.sendLinkForResetPassword
        }))
      } else {
        toast.error(message);
      }
    } catch (error: any) {
      toast.error("Непредвиденная ошибка. Её код: " + error.response.status);
    }
  }

const changePasword = (body: i.Api_Auth_ChangePassword_Body): any =>
  async (dispatch: AppDispatch) =>  {
    try {
      const { status_code, message }: i.Response =
        await api.auth.changePassword(body);
      if (status_code === 200) {
        toast.success(message);
        history.replace(constants.routes.auth.login);
      } else {
        toast.error(message);
      }
    } catch (error: any) {
      toast.error("Непредвиденная ошибка. Её код: " + error.response.status);
    }
  }

const auth = Object.freeze(
  Object.seal({
    login,
    resetPassword,
    changePasword
  })
);

export default auth;
