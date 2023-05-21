import { BASE_URL } from "@env";
import axios from "axios";

const createInstance = axios.create({
  baseURL: BASE_URL,
});

export { createInstance };
