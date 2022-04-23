import Cookie from "js-cookie";
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { baseURL } from "@utilities/baseUrl.utility";
import { LSTokenName } from '@utilities/locastorage.utility';
import { upperToLowerCase } from "@functions";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Expose-Headers": "X-Pagination",
  },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token: string | null = Cookie.get(LSTokenName) || null;

  const newConfig: { [k: string]: any } = { ...config };

  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }

  const updatedConfig: Record<string, unknown> = newConfig;

  return updatedConfig;
});

instance.interceptors.response.use(
  (response: AxiosResponse) => upperToLowerCase(response),
  (error: AxiosError) => Promise.reject(error)
);

const responseBody = (response: AxiosResponse): any => {
  const responseData = response.data;
  const responseHeaders = response.headers;
  if (responseData.statusCode === 401 || responseData.statusCode === 403) {
    Cookie.remove(LSTokenName);
  }
  return { responseData, responseHeaders };
};

const get = (url: string, params?: string | any) =>
  instance.get(url, { params }).then(responseBody);

const post = (url: string, body?: any) =>
  instance.post(url, body).then(responseBody);

const put = (url: string, body?: any) =>
  instance.put(`${url}`, body).then(responseBody);

const del = (url: string, id?: string) =>
  instance.delete(`${url}/${id}`).then(responseBody);

export { get, post, put, del };
