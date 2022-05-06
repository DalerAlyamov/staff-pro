import { ObjectToQuery } from "@functions";
import * as i from "@interfaces";

const accountant = Object.freeze(
  Object.seal({
    attachDocumentsToBusinessTrip: (id: string) =>
      "/api/accountant/attach-documents-to-business-trip/" + id,
    finishBusinessTrip: (id: string) =>
      "/api/accountant/finish-business-trip/" + id,
    sendForRevision: (id: string) => "/api/accountant/send-for-revision/" + id,
  })
);

const auth = Object.freeze(
  Object.seal({
    login: "/api/auth/login",
    resetPassword: "/api/auth/reset-password",
    checkResetPasswordToken: "/api/auth/check-reset-password-token",
    changePassword: "/api/auth/change-password",
    retryToken: "/api/auth/retry-token",
    checkAccessToken: "/api/auth/check-access-token",
  })
);

const businessTrip = Object.freeze(
  Object.seal({
    create: "/api/business-trip/create",
    get: (id: string) => "/api/business-trip/get/" + id,
    getTemplate: "/api/business-trip/get-template",
    getAll: (params: i.Api_BusinessTrip_GetAll_Params) =>
      "/api/business-trip/get-all" + ObjectToQuery(params),
    edit: (id: string) => "/api/business-trip/edit/" + id,
    remove: (id: string) => "/api/business-trip/remove/" + id,
  })
);

const buyer = Object.freeze(
  Object.seal({
    getAllApplications: (params: i.Api_Buyer_GetAllApplications_Params) =>
      "/api/buyer/get-all-applications" + ObjectToQuery(params),
    getMyApplications: (params: i.Api_Buyer_GetMyApplications_Params) =>
      "/api/buyer/get-my-applications" + ObjectToQuery(params),
    attachDocumentsToBusinessTrip: (id: string) =>
      "/api/buyer/attach-documents-to-business-trip/" + id,
    sendForRevision: (id: string) => "/api/buyer/send-for-revision/" + id,
    startBusinessTrip: (id: string) => "/api/buyer/set-to-process/" + id,
  })
);

const director = Object.freeze(
  Object.seal({
    refuse: (id: string) => "/api/director/refuse/" + id,
    approve: (id: string) => "/api/director/approve/" + id,
    sendForRevision: (id: string) => "/api/director/send-for-revision/" + id,
    sendForPurchase: (id: string) => "/api/director/send-for-purchase/" + id,
  })
);

const employee = Object.freeze(
  Object.seal({
    get: (id: string) => "/api/employee/get/" + id,
    getAll: (params: i.Api_Employee_GetAll_Params) => "/api/employee/get-all" + ObjectToQuery(params),
    getApplications: (id: string, params: i.Api_Employee_GetApplications_Params) => "/api/employee/get-applications/" + id + ObjectToQuery(params),
    getAllEmployeeApplications: (params: i.Api_Employee_GetAllEmployeeApplications_Params) => "/api/employee/get-all-employee-applications/" + ObjectToQuery(params),
    getEmployeeTemplate: "/api/employee/get-employee-template",
  })
);

const hr = Object.freeze(
  Object.seal({
    createEmployee: "/api/hr/create-employee",
    editBusinessTripTemplate: (id: string) => "/api/hr/edit-business-trip-template/" + id,
    editEmployeeTemplate: (id: string) => "/api/hr/edit-employee-template/" + id,
    editEmployee: (id: string) => "/api/hr/edit-employee/" + id,
    archiveEmployee: (id: string) => "/api/hr/archive-employee/" + id
  })
);

const notifications = Object.freeze(
  Object.seal({
    getAll: (params: i.Api_Notifications_GetAll_Params) => "/api/notifications/get-all" + ObjectToQuery(params),
    read: (id: string) => "/api/notifications/read/" + id,
  })
);

const vacation = Object.freeze(
  Object.seal({
    create: "/api/vacation/create",
    edit: (id: string) => "/api/vacation/edit/" + id,
    get: (id: string) => "/api/vacation/get/" + id,
    getAll: (params: i.Api_Vacation_GetAll_Params) => "/api/vacation/getAll/" + ObjectToQuery(params),
    remove: (id: string) => "/api/vacation/remove/" + id,
    finsih: (id: string) => "/api/vacation/finsih/" + id,
  })
);

const api = Object.freeze(
  Object.seal({
    accountant,
    auth,
    businessTrip,
    buyer,
    director,
    employee,
    hr,
    notifications,
    vacation
  })
);

export default api;
