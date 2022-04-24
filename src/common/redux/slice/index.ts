import { modalActions as modal } from "@redux/slice/modal.slice";
import { userActions as user } from "@redux/slice/user.slice";

const actions = Object.freeze(
  Object.seal({
    modal,
    user,
  })
);

export default actions;
