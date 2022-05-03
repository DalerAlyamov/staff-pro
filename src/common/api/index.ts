import accountant from "./accountant.api";
import auth from "./auth.api";

const api = Object.freeze(
  Object.seal({
    accountant,
    auth
  })
);

export default api;
