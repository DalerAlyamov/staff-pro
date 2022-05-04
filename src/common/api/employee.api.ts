import constants from "@constants";
import * as request from "@utilities/axios.utility";
import * as i from "@interfaces";

const get = (id: string) =>
  request.get(constants.api.employee.get(id));
  
const getAll = (params: i.Api_Employee_GetAll_Params) =>
  request.get(constants.api.employee.getAll(params));

const getApplications = (id: string, params: i.Api_Employee_GetApplications_Params) =>
  request.get(constants.api.employee.getApplications(id, params));
  
const getAllEmployeeApplications = (params: i.Api_Employee_GetAllEmployeeApplications_Params) =>
  request.get(constants.api.employee.getAllEmployeeApplications(params));
  
const getEmployeeTemplate = () =>
  request.get(constants.api.employee.getEmployeeTemplate);

const employee = Object.freeze(
  Object.seal({
    get,
    getAll,
    getApplications,
    getAllEmployeeApplications,
    getEmployeeTemplate
  })
);

export default employee;
