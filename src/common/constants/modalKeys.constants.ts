const sendLinkForResetPassword = "SEND_LINK_FOR_RESET_PASSWORD";

const requestCreate = "REQUEST_CREATE";
const requestDeleted = "REQUEST_DELETED";
const sickLeaveCompleted = "SICK_LEAVE_COMPLETED";
const businessTripCompleted = "BUSINESS_TRIP_COMPLETED";

const confirm = Object.freeze(
  Object.seal({
    requestDeleting: "CONFIRM_REQUEST_DELETING",
    requestRejection: "CONFIRM_REQUEST_REJECTION",
    employeeArchiving: "CONFIRM_EMPLOYEE_ARCHIVING",
    completionOfBusinessTrip: "CONFIRM_BUSINESS_TRIP_COMPLETION",
    businessTripExtension: "CONFIRM_BUSINESS_TRIP_EXTENSION",
    completionOfSickLeave: "CONFIRM_SICK_LEAVE_COMPLETION",
    endOfVacation: "CONFIRM_END_OF_VACATION",
    sendingDocuments: "CONFIRM_SENDING_DOCUMENTS"
  })
)

const modalKeys = Object.freeze(
  Object.seal({
    sendLinkForResetPassword,
    requestCreate,
    requestDeleted,
    sickLeaveCompleted,
    businessTripCompleted,
    confirm
  })
);

export default modalKeys;
