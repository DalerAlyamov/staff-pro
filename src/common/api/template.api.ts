import constants from "@constants";
import * as request from "@utilities/axios.utility";
import * as i from "@interfaces";

const temp = (body: i.template) => request.post(constants.apiRoutes.template.temp, body);

const template = Object.freeze(
  Object.seal({
    temp,
  })
);

export default template;
