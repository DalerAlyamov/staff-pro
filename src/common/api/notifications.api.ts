import constants from "@constants";
import * as request from "@utilities/axios.utility";
import * as i from "@interfaces";

const getAll = (params: i.Api_Notifications_GetAll_Params) =>
  request.get(constants.api.notifications.getAll(params));

const read = (id: string) =>
  request.get(constants.api.notifications.read(id));

const notifications = Object.freeze(
  Object.seal({
    getAll,
    read
  })
);

export default notifications;
