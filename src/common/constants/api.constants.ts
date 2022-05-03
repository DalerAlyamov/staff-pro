const accountant = Object.freeze(
  Object.seal({
    finishBusinessTrip: (id: string) => "/api/accountant/finish-business-trip/"+id,
    sendForRevision: (id: string) => "/api/accountant/send-for-revision/"+id,
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

const api = Object.freeze(
  Object.seal({
    accountant,
    auth
  })
);

export default api;
