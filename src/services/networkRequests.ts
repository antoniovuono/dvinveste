import { isAxiosError } from "axios";

import { createInstance } from "./api";
import { IStocksRequest } from "./interface";

export interface HttpResponse<T> {
  data: T[];
}

const getRequest = (route: string, token?: string) => {
  try {
    const response = createInstance.get<HttpResponse<IStocksRequest>>(route, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.toJSON());
    } else {
      console.error(error);
    }
  }
};

export { getRequest };
