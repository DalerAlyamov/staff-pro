import { isObject } from "./isObject";

export const ObjectToQuery = (obj: Record<string, any>): string => {
  let searchParams: string[] = [];

  if (!isObject(obj)) return "";

  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((value: any) => {
        searchParams.push(`${key}=${value}`);
      });
    } else if (obj[key] !== "" && obj[key] !== null && obj[key] !== undefined) {
      searchParams.push(`${key}=${obj[key]}`);
    }
  });

  return "?" + searchParams.join("&");
};

export const QueryToObject = (): any => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  let result: any = {};

  Array.from(urlSearchParams).forEach((param) => {
    if (result[param[0]] !== undefined) {
      if (Array.isArray(result[param[0]]))
        result[param[0]] = [...result[param[0]], param[1]];
      else result[param[0]] = [result[param[0]], param[1]];
    } else result[param[0]] = param[1];
  });

  return result;
};
