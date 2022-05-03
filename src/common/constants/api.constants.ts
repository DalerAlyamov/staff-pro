import { ObjectToQuery } from "@functions";
import * as i from "@interfaces";

const accountant = Object.freeze(
  Object.seal({
    finishBusinessTrip: (id: string) =>
      "/api/accountant/finish-business-trip/" + id,
    sendForRevision: (id: string) => "/api/accountant/send-for-revision/" + id,
  })
);

const auth = Object.freeze(
  Object.seal({
    login: "/api/auth/login",
    resetPassword: "/api/auth/reset-password",
    checkResetPasswordToken: "/api/auth/check-reset-password-token",
    changePassword: "/api/auth/change-password",
    retryToken: "/api/auth/retry-token",
    checkAccessToken: "/api/auth/check-access_token",
  })
);

const businessTrip = Object.freeze(
  Object.seal({
    create: "/api/business-trip/create",
    get: (id: string) => "/api/business-trip/get/" + id,
    getTemplate: "/api/business-trip/get-template",
    getAll: (params: i.Api_BusinessTrip_GetAll_Params) =>
      "/api/business-trip/get-all" + ObjectToQuery(params),
    edit: (id: string) => "/api/business-trip/edit/" + id,
    remove: (id: string) => "/api/business-trip/remove/" + id,
  })
);

const api = Object.freeze(
  Object.seal({
    accountant,
    auth,
    businessTrip,
  })
);

export default api;
