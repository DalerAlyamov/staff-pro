import constants from "@constants";
import * as request from "@utilities/axios.utility";
import * as i from "@interfaces";

const create = (body: i.Api_BusinessTrip_Create_Body) =>
  request.post(constants.api.businessTrip.create, body);

const get = (id: string) =>
  request.get(constants.api.businessTrip.get(id));

const getTemplate = () =>
  request.get(constants.api.businessTrip.getTemplate);

const getAll = (params: i.Api_BusinessTrip_GetAll_Params) =>
  request.get(constants.api.businessTrip.getAll(params));

const edit = (id: string, body: i.Api_BusinessTrip_Edit_Body) =>
  request.put(constants.api.businessTrip.edit(id), body);

const remove = (id: string) =>
  request.del(constants.api.businessTrip.remove(id));

const businessTrip = Object.freeze(
  Object.seal({
    create,
    get,
    getTemplate,
    getAll,
    edit,
    remove
  })
);

export default businessTrip;
