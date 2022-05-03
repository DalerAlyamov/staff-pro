import constants from "@constants";
import * as request from "@utilities/axios.utility";

const finishBusinessTrip = (id: string) => request.patch(constants.api.accountant.finishBusinessTrip(id));
const sendForRevision = (id: string) => request.patch(constants.api.accountant.sendForRevision(id));

const accountant = Object.freeze(
  Object.seal({
    finishBusinessTrip,
    sendForRevision
  })
);

export default accountant;
