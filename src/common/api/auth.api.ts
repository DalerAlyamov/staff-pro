import constants from "@constants";
import * as request from "@utilities/axios.utility";
import * as i from "@interfaces";

const login = (body: i.Api_Auth_Login_Body) =>
  request.post(constants.api.auth.login, body);

const resetPassword = (body: i.Api_Auth_ResetPassword_Body) =>
  request.post(constants.api.auth.resetPassword, body);

const checkResetPasswordToken = (body: i.Api_Auth_CheckResetPasswordToken_Body) =>
  request.post(constants.api.auth.checkResetPasswordToken, body);

const changePassword = (body: i.Api_Auth_ChangePassword_Body) =>
  request.post(constants.api.auth.changePassword, body);

const retryToken = (body: i.Api_Auth_RetryToken_Body) =>
  request.post(constants.api.auth.retryToken, body);

const checkAccessToken = (body: i.Api_Auth_CheckAccessToken_Body) =>
  request.post(constants.api.auth.checkAccessToken, body);

const auth = Object.freeze(
  Object.seal({
    login,
    resetPassword,
    checkResetPasswordToken,
    changePassword,
    retryToken,
    checkAccessToken
  })
);

export default auth;
