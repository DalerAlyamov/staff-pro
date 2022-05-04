import constants from "@constants";
import * as request from "@utilities/axios.utility";
import * as i from "@interfaces";

const create = (body: i.Api_Vacation_Create_Body) =>
  request.post(constants.api.vacation.create, body);

const edit = (id: string) =>
  request.put(constants.api.vacation.edit(id));

const get = (id: string) =>
  request.get(constants.api.vacation.get(id));

const getAll = (params: i.Api_Vacation_GetAll_Params) =>
  request.get(constants.api.vacation.getAll(params));

const remove = (id: string) =>
  request.del(constants.api.vacation.remove(id));

const finish = (id: string) =>
  request.patch(constants.api.vacation.finsih(id));

const vacation = Object.freeze(
  Object.seal({
    create,
    edit,
    get,
    getAll,
    remove,
    finish
  })
);

export default vacation;
