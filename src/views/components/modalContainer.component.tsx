import { useAppSelector } from "@redux";
import constants from "@constants";
import { Template } from "views/modals";

const ModalContainer: React.FC = (): JSX.Element => {
  const { key, props } = useAppSelector((state) => state.modal);

  switch (key) {
    case constants.modalKeys.sendLinkForResetPassword:
      return <Template {...props} />;
    default:
      return <></>;
  }
};

export default ModalContainer;
