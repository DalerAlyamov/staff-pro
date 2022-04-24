import routes from "./routes.constants";
import apiRoutes from "./apiRoutes.constants";
import modalKeys from "./modalKeys.constants";
import pageNames from "./pageNames.constants";
import userRankList from "./userRankList.constants";

const constants = Object.freeze(
  Object.seal({
    routes,
    apiRoutes,
    modalKeys,
    pageNames,
    userRankList
  })
);

export default constants;
