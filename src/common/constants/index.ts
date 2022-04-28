import routes from "./routes.constants";
import api from "./api.constants";
import modalKeys from "./modalKeys.constants";
import pageNames from "./pageNames.constants";
import userTypeList from "./userTypeList.constants";
import navigationList from "./navigationList.constants";

const constants = Object.freeze(
  Object.seal({
    routes,
    api,
    modalKeys,
    pageNames,
    userTypeList,
    navigationList
  })
);

export default constants;
