import { modalActions as modal } from "./modal.slice";
import { templateActions as template } from "./template.slice";

const actions = Object.freeze(
  Object.seal({
    modal,
    template,
  })
);

export default actions;
