import constants from "@constants";
import * as request from "@utilities/axios.utility";
import * as i from "@interfaces";

const login = (body: i.ApiLoginBody) =>
  request.post(constants.api.auth.login, body);

const resetPassword = (body: i.ApiResetPasswordBody) =>
  request.post(constants.api.auth.resetPassword, body);

const checkResetPasswordToken = (body: i.ApiCheckResetPasswordTokenBody) =>
  request.post(constants.api.auth.checkResetPasswordToken, body);

const changePassword = (body: i.ApiChangePasswordBody) =>
  request.post(constants.api.auth.changePassword, body);

const retryToken = (body: i.ApiRetryTokenBody) =>
  request.post(constants.api.auth.retryToken, body);

const checkAccessToken = (body: i.ApiCheckAccessTokenBody) =>
  request.post(constants.api.auth.checkAccessToken, body);

const accountant = Object.freeze(
  Object.seal({
    login,
    resetPassword,
    checkResetPasswordToken,
    changePassword,
    retryToken,
    checkAccessToken
  })
);

export default accountant;
