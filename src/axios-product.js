import axios from "axios";
import { apiUrl } from "./config-base";

const instance = axios.create({
  baseURL: apiUrl,
});

export default instance;
