import routes from "./routes.constants";
import apiRoutes from "./apiRoutes.constants";
import modalKeys from "./modalKeys.constants";
import pageNames from "./pageNames.constants";

const constants = Object.freeze(
  Object.seal({
    routes,
    apiRoutes,
    modalKeys,
    pageNames,
  })
);

export default constants;
