import constants from "@constants";
import * as request from "@utilities/axios.utility";

const temp = (body: any) => request.post(constants.apiRoutes.template.temp, body);

const template = Object.freeze(
  Object.seal({
    temp,
  })
);

export default template;
