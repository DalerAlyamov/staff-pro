import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import Component from "@components";
import AppRoutes from "@routes";
import { store } from "@redux";
import { CustomRouter } from "@utilities/customRouter.utility";

import "@styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

const app = (
  <Provider store={store}>
    <CustomRouter>
      <AppRoutes />
      <Component.ModalContainer />
      <ToastContainer />
    </CustomRouter>
  </Provider>
);

const root = createRoot(document.getElementById("staff-pro") as HTMLElement);

root.render(app);
