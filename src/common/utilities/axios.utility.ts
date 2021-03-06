import Cookies from "js-cookie";
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { baseURL } from "@utilities/baseUrl.utility";
import { LSAccessTokenName } from "@utilities/locastorage.utility";
import { upperToLowerCase } from "@functions";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Expose-Headers": "X-Pagination",
  },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token: string | null = Cookies.get(LSAccessTokenName) || null;

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
  if (responseData.status_code === 401 || responseData.status_code === 403) {
    Cookies.remove(LSAccessTokenName);
  }
  return responseData;
};

const get = (url: string, params?: string | any) =>
  instance.get(url, { params }).then(responseBody);

const post = (url: string, body?: any) =>
  instance.post(url, body).then(responseBody);

const put = (url: string, body?: any) =>
  instance.put(`${url}`, body).then(responseBody);

const del = (url: string) =>
  instance.delete(url).then(responseBody);

const patch = (url: string) =>
  instance.delete(url).then(responseBody);

export { get, post, put, del, patch };
