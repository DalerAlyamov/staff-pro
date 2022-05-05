import React from "react";
import Component from "@components";
import constants from "@constants";
import { useAppDispatch } from "@redux";
import actions from "@redux/slice";

export const Login: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <Component.Page title={constants.pageNames.auth.login}>
      <button
        onClick={() =>
          dispatch(
            actions.modal.openModal({
              key: constants.modalKeys.sendLinkForResetPassword,
            })
          )
        }
      >
        Нажать
      </button>
    </Component.Page>
  );
};
