import RequestDeleting from "./confirm/requestDeleting.modal";
import CompletionOfBusinessTrip from "./confirm/completionOfBusinessTrip.modal";
import EmployeeArchiving from "./confirm/employeeArchiving.modal";
import RequestRejection from "./confirm/requestRejection.modal";
import EndOfVacation from "./confirm/endOfVacation.modal";
import BusinessTripCompleted from "./businessTripCompleted.modal";
import RequestCreated from "./requestCreated.modal";
import SendLinkForResetPassword from "./sendLinkForResetPassword.modal";
import RequestDeleted from "./requestDeleted.modal";
import RequestCreate from "./requestCreate.modal";
import SelectApplicationType from "./selectApplicationType.modal";

const Modal = Object.freeze(
	Object.seal({
		RequestDeleting,
		CompletionOfBusinessTrip,
		EmployeeArchiving,
		RequestRejection,
		EndOfVacation,
		BusinessTripCompleted,
		RequestCreated,
		SendLinkForResetPassword,
		RequestDeleted,
		RequestCreate,
		SelectApplicationType
	})
)

export default Modal;