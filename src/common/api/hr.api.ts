import constants from "@constants";
import * as request from "@utilities/axios.utility";
import * as i from "@interfaces";

const createEmployee = (body: i.Api_HR_CreateEmployee_Body) =>
  request.post(constants.api.hr.createEmployee, body);

const editBusinessTripTemplate = (id: string, body: i.Api_HR_EditBusinessTripTemplate_Body) =>
  request.put(constants.api.hr.editBusinessTripTemplate(id), body);

const editEmployeeTemplate = (id: string, body: i.Api_HR_EditEmployeeTemplate_Body) =>
  request.put(constants.api.hr.editEmployeeTemplate(id), body);

const editEmployee = (id: string, body: i.Api_HR_EditEmployee_Body) =>
  request.put(constants.api.hr.editEmployee(id), body);

const archiveEmployee = (id: string) =>
  request.del(constants.api.hr.archiveEmployee(id));

const hr = Object.freeze(
  Object.seal({
    createEmployee,
    editBusinessTripTemplate,
    editEmployeeTemplate,
    editEmployee,
    archiveEmployee
  })
);

export default hr;
