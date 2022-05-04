import constants from "@constants";
import * as request from "@utilities/axios.utility";
import * as i from "@interfaces";

const attachDocumentsToBusinessTrip = (id: string, body: i.Api_Accountant_AttachDocumentsToBusinessTrip_Body[]) =>
  request.put(constants.api.accountant.attachDocumentsToBusinessTrip(id), body);

const finishBusinessTrip = (id: string) => request.patch(constants.api.accountant.finishBusinessTrip(id));

const sendForRevision = (id: string) => request.patch(constants.api.accountant.sendForRevision(id));

const accountant = Object.freeze(
  Object.seal({
    attachDocumentsToBusinessTrip,
    finishBusinessTrip,
    sendForRevision
  })
);

export default accountant;
