import { BASE_URL } from "@env";
import axios from "axios";

const url = BASE_URL;

const createInstance = axios.create({
  baseURL: url,
});

export { createInstance };
