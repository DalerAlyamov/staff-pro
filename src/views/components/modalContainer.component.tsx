import { useAppSelector } from "@redux";
import constants from "@constants";
import Modal from "@modals";

const ModalContainer: React.FC = (): JSX.Element => {
  const { key, props } = useAppSelector((state) => state.modal);

  switch (key) {
    case constants.modalKeys.confirm.requestDeleting:
      return <Modal.RequestDeleting {...props} />;
    case constants.modalKeys.confirm.requestRejection:
      return <Modal.RequestDeleting {...props} />;
    case constants.modalKeys.confirm.employeeArchiving:
      return <Modal.EmployeeArchiving {...props} />;
    case constants.modalKeys.confirm.completionOfBusinessTrip:
      return <Modal.CompletionOfBusinessTrip {...props} />;
    case constants.modalKeys.confirm.endOfVacation:
      return <Modal.EndOfVacation {...props} />;
    case constants.modalKeys.businessTripCompleted:
      return <Modal.BusinessTripCompleted {...props} />;
    case constants.modalKeys.requestCreated:
      return <Modal.RequestCreated {...props} />;
    case constants.modalKeys.sendLinkForResetPassword:
      return <Modal.SendLinkForResetPassword {...props} />;
    case constants.modalKeys.requestDeleted:
      return <Modal.RequestDeleted {...props} />;
    case constants.modalKeys.requestCreate:
      return <Modal.RequestCreate {...props} />;
    case constants.modalKeys.selectApplicationType:
      return <Modal.SelectApplicationType {...props} />;
    default:
      return <></>;
  }
};

export default ModalContainer;
