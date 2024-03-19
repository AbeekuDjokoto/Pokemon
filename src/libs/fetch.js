import axios from "axios";
import { CONFIG } from "../../config";

const instance = axios.create({
  baseURL: CONFIG.baseURL,
});

async function get(...args) {
  return instance.get(...args);
}
async function post(...args) {
  return instance.post(...args);
}
async function patch(...args) {
  return instance.patch(...args);
}
async function put(...args) {
  return instance.put(...args);
}
async function httpDelete(...args) {
  return instance.delete(...args);
}

const httpClient = {
  get,
  post,
  put,
  patch,
  delete: httpDelete,
};

export { get, httpClient, httpDelete, patch, post, put };
