import { useAppSelector } from "@store";
import constants from "@constants";
import { Template } from "views/modals";

const ModalContainer: React.FC = (): JSX.Element => {
  const { modalKey, modalProps } = useAppSelector((state) => state.modal);

  switch (modalKey) {
    case constants.modalKeys.template:
      return <Template {...modalProps} />;
    default:
      return <></>;
  }
};

export default ModalContainer;
