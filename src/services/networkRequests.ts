import { isAxiosError } from "axios";

import { createInstance } from "./api";

const getRequest = (route: string, token?: string) => {
  try {
    const response = createInstance.get(route, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.status);
      console.log(error.response);
    } else {
      console.error(error);
    }
  }
};

export { getRequest };
