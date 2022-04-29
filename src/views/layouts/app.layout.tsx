import React from "react";
import { Outlet } from "react-router-dom";
import UI from "@ui";
import { useAppDispatch } from "@redux";
import actions from "@redux/slice";
import constants from "@constants";

const AppLayout: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="testtest">
        <UI.Button 
          type="contained" 
          onClick={() => dispatch(actions.modal.openModal({
            key: constants.modalKeys.selectApplicationType
          }))}
        >
          Открыть модальное окно
        </UI.Button>
      </div>
      <Outlet />
    </>
  );
};

export default AppLayout;
