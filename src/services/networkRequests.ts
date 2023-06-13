import { isAxiosError } from "axios";

import { createInstance } from "./api";

export interface HttpResponse<T> {
  data: T[];
}

const getRequest = (route: string, token?: string) => {
  try {
    const response = createInstance.get(route);

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
