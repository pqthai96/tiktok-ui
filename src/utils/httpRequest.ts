import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export const get = async (path: string, options: object = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
}

export default httpRequest;