import { useAppSelector } from "@store";
import { modals } from "@constants";
import { Template } from "views/modals";

const ModalContainer: React.FC = (): JSX.Element => {
  const { modalKey, modalProps } = useAppSelector((state) => state.modal);

  switch (modalKey) {
    case modals.template:
      return <Template {...modalProps} />;
    default:
      return <></>;
  }
};

export default ModalContainer;