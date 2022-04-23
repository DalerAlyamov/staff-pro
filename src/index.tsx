import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import Components from "@components";
import { Routes } from "@routes";
import { store } from "@store";
import { CustomRouter } from "@utilities/customRouter.utility";

import "@styles/global.scss";

const app = (
  <Provider store={store}>
    <CustomRouter>
      <Routes />
      <Components.ModalContainer />
      <ToastContainer />
    </CustomRouter>
  </Provider>
);

const root = createRoot(document.getElementById("staff-pro") as HTMLElement);

root.render(app);
