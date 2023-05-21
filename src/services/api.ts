import axios from "axios";

const BASE_URL = "https://brapi.dev";

const createInstance = axios.create({
  baseURL: BASE_URL,
});

export { createInstance };
