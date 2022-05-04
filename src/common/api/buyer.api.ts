import constants from "@constants";
import * as request from "@utilities/axios.utility";
import * as i from "@interfaces";

const getAllApplications = (params: i.Api_Buyer_GetAllApplications_Params) =>
  request.get(constants.api.buyer.getAllApplications(params));

const getMyApplications = (params: i.Api_Buyer_GetMyApplications_Params) =>
  request.get(constants.api.buyer.getMyApplications(params));

const attachDocumentsToBusinessTrip = (id: string, body: i.Api_Buyer_AttachDocumentsToBusinessTrip_Body[]) =>
  request.put(constants.api.buyer.attachDocumentsToBusinessTrip(id), body);

const sendForRevision = (id: string) =>
  request.patch(constants.api.buyer.sendForRevision(id));

const startBusinessTrip = (id: string) =>
  request.patch(constants.api.buyer.startBusinessTrip(id));

const buyer = Object.freeze(
  Object.seal({
    getAllApplications,
    getMyApplications,
    attachDocumentsToBusinessTrip,
    sendForRevision,
    startBusinessTrip
  })
);

export default buyer;
